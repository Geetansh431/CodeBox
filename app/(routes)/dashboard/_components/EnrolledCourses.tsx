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
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    GetUserEnrolledCourses();
  }, []);

  const GetUserEnrolledCourses = async () => {
    setLoading(true);
    const result = await axios.get('/api/course?courseId=enrolled');
    setEnrolledCourses(result.data);
    setLoading(false);
  };

  const filteredCourses = enrolledCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-4 font-game">Your Enrolled Courses</h2>
      {loading ? (
        <div className="flex gap-5 pb-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex-shrink-0 min-w-[calc(50%-10px)]">
              <Skeleton className="w-full h-64 rounded-2xl" />
            </div>
          ))}
        </div>
      ) : enrolledCourses.length === 0 ? (
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
        <div>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="font-game w-full px-4 py-2 mb-4 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
          />
          {filteredCourses.length === 0 ? (
            <div className="flex justify-center items-center p-7 text-zinc-400">
              No courses found matching "{searchQuery}"
            </div>
          ) : (
            <div className="flex gap-5 overflow-x-auto pb-2">
              {filteredCourses?.map((course) => (
                <div
                  key={course.courseId}
                  className="flex-shrink-0 min-w-[calc(50%-10px)]"
                >
                  <CourseProgressCard course={course} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
