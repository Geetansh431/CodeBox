'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';
import { CourseProgressCard } from './CourseProgressCard';

export type EnrolledCoursesInfo = {
  bannerImage: string;
  courseId: number;
  completedExercises: number;
  level: string;
  title: string;
  totalExercises: number;
  xpEarned: number;
};

export function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCoursesInfo[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetUserEnrolledCourses();
  }, []);

  const GetUserEnrolledCourses = async () => {
    setLoading(true);
    const result = await axios.get('/api/course?courseId=enrolled');
    setEnrolledCourses(result.data);
    setLoading(false);
  };
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Your Enrolled Courses</h2>
      {loading && <Skeleton className="w-full rounded-2xl my-5" />}
      {enrolledCourses.length === 0 ? (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src={'/books.png'} alt="book" height={90} width={90} />
          <h2 className="font-game">You Don't have any enrolled courses</h2>
          <Link href={'/courses'}>
            <Button variant={'pixel'} size={'lg'} className="font-game text-lg">
              Browse All Courses
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {enrolledCourses?.map((course, index) => (
            <CourseProgressCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
