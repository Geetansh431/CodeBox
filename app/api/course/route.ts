import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CoursesTable,
  EnrolledCourseTable,
} from '@/config/schema';
import { and, asc, desc, eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get('courseId');
  const session = await getCurrentUser();

  if (courseId) {
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
  } else {
    const result = await db
      .select()
      .from(CoursesTable)
      .orderBy(asc(CoursesTable.id));
    return NextResponse.json(result);
  }
}
