import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CoursesTable,
  EnrolledCourseTable,
} from '@/config/schema';
import { and, asc, desc, eq, inArray } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get('courseId') || searchParams.get('courseid');
  const session = await getCurrentUser();
  const userEmail = session?.email;
  if (!userEmail) return NextResponse.json({ error: 'User not authenticated' });

  if (courseId && courseId.toLowerCase() !== 'enrolled') {
    const result = await db
      .select()
      .from(CoursesTable)
      //@ts-ignore
      .where(eq(CoursesTable.courseId, courseId));

    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      //@ts-ignore
      .where(eq(CourseChaptersTable.courseId, courseId));

    let isEnrolledCourse = false;
    let enrolledCourse: any[] = [];
    let completedExercises: any[] = [];

    // Only fetch user-specific data if authenticated
    if (session) {
      enrolledCourse = await db
        .select()
        .from(EnrolledCourseTable)
        .where(
          and(
            // @ts-ignore
            eq(EnrolledCourseTable?.courseId, courseId),
            eq(EnrolledCourseTable.userId, session.email)
          )
        );

      isEnrolledCourse = enrolledCourse?.length > 0;

      completedExercises = await db
        .select()
        .from(CompletedExerciseTable)
        .where(
          and(
            //@ts-ignore
            eq(CompletedExerciseTable.courseId, courseId),
            eq(CompletedExerciseTable.userId, session.email)
          )
        )
        .orderBy(
          desc(CompletedExerciseTable?.courseId),
          desc(CompletedExerciseTable?.exerciseId)
        );
    }

    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0] || null,
      completedExercises: completedExercises,
    });
  } else if (courseId && courseId.toLowerCase() === 'enrolled') {
    // 1️⃣ Fetch all enrolled courses for the user
    const enrolledCourses = await db
      .select()
      .from(EnrolledCourseTable)
      .where(eq(EnrolledCourseTable.userId, userEmail));

    if (enrolledCourses.length === 0) {
      return NextResponse.json([]);
    }

    // Extract courseIds
    const courseIds = enrolledCourses
      .map((c) => c.courseId)
      .filter((id) => id !== null);

    // 2️⃣ Fetch all course details in one go
    const courses = await db
      .select()
      .from(CoursesTable)
      //@ts-ignore
      .where(inArray(CoursesTable.courseId, courseIds));

    // 3️⃣ Fetch chapters for all courses
    const chapters = await db
      .select()
      .from(CourseChaptersTable)
      //@ts-ignore
      .where(inArray(CourseChaptersTable.courseId, courseIds))
      .orderBy(asc(CourseChaptersTable.chapterId));

    // 4️⃣ Fetch completed exercises for all courses
    const completed = await db
      .select()
      .from(CompletedExerciseTable)
      //@ts-ignore
      .where(
        and(
          inArray(CompletedExerciseTable.courseId, courseIds),
          eq(CompletedExerciseTable.userId, userEmail)
        )
      )
      .orderBy(
        desc(CompletedExerciseTable.courseId),
        desc(CompletedExerciseTable.exerciseId)
      );

    const finalResult = courses.map((course) => {
      const courseEnrollInfo = enrolledCourses.find(
        (e) => e.courseId === course.courseId
      );

      return {
        ...course,
        chapters: chapters.filter((ch) => ch.courseId === course.courseId),
        completedExercises: completed.filter(
          (cx) => cx.courseId === course.courseId
        ),
        courseEnrolledInfo: courseEnrollInfo,
        userEnrolled: true,
      };
    });

    // ⭐ Format output
    const formattedResult = finalResult.map((item) => {
      // Count total exercises by summing exercises arrays in all chapters
      const totalExercises = item.chapters.reduce((acc, chapter) => {
        // If exercises is stored as JSON/array
        const exercisesCount = Array.isArray(chapter.exercises)
          ? chapter.exercises.length
          : 0;
        return acc + exercisesCount;
      }, 0);

      const completedExercises = item.completedExercises.length;

      return {
        courseId: item.courseId,
        title: item.title,
        bannerImage: item?.bannerImage,
        totalExercises,
        completedExercises,
        xpEarned: item.courseEnrolledInfo?.xpEarned || 0,
        level: item.level,
      };
    });

    return NextResponse.json(formattedResult);
  } else {
    const result = await db
      .select()
      .from(CoursesTable)
      .orderBy(asc(CoursesTable.id));
    return NextResponse.json(result);
  }
}
