import { db } from '@/config/db';
import { EnrolledCourseTable } from '@/config/schema';
import { getCurrentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { courseId } = await req.json();

  const result = await db
    .insert(EnrolledCourseTable)
    .values({
      courseId: courseId,
      userId: session.email,
      xpEarned: 0,
    })
    .returning();

  return NextResponse.json(result);
}
