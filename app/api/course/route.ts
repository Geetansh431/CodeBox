import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable, CoursesTable } from '@/config/schema';
import { asc, eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get('courseId');

  if (courseId) {
    //@ts-ignore
    const result = await db
      .select()
      .from(CoursesTable)
      .where(eq(CoursesTable.courseId, courseId));

    //@ts-ignore
    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      .where(eq(CourseChaptersTable.courseId, courseId));

    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
    });
  } else {
    const result = await db
      .select()
      .from(CoursesTable)
      .orderBy(asc(CoursesTable.id));
    return NextResponse.json(result);
  }
}
