import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Course } from '../../_components/CourseList';

type Props = {
  courseDetail: Course | undefined;
  loading?: boolean;
};

export function CourseStatus({ courseDetail, loading }: Props) {
  const [counts, setCounts] = useState<{
    totalExce: number;
    totalXp: number;
  }>();

  useEffect(() => {
    courseDetail && GetCounts();
  }, [courseDetail]);

  const GetCounts = () => {
    let totalExcercises = 0;
    let totalXp = 0;
    courseDetail?.chapters?.forEach((chapter) => {
      totalExcercises = totalExcercises + chapter?.exercises?.length;
      chapter?.exercises?.forEach((exc) => {
        totalXp = totalXp + exc?.xp;
      });
    });

    setCounts({
      totalExce: totalExcercises,
      totalXp: totalXp,
    });
  };

  const UpdateProgress = (currentValue: number, totalValue: number) => {
    if (currentValue && totalValue) {
      const percentage = (currentValue * 100) / totalValue;
      return percentage;
    }
    return;
  };

  if (loading) {
    return (
      <div className="font-game p-4 border-4 rounded-2xl w-full">
        <Skeleton className="h-8 w-32 mb-4" />

        <div className="flex items-center gap-5 mt-4">
          <Skeleton className="h-12 w-12 rounded" />
          <div className="w-full">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-4">
          <Skeleton className="h-12 w-12 rounded" />
          <div className="w-full">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-game p-4 border-4 rounded-2xl w-full">
      <h2 className="text-3xl">Course Progress</h2>

      <div className="flex items-center gap-5 mt-4">
        <Image src="/book.png" alt="book" width={40} height={50} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            Exercises{' '}
            <span className="text-gray-400">
              {courseDetail?.completedExercises?.length}/{counts?.totalExce}
            </span>
          </h2>
          <Progress
            value={UpdateProgress(
              courseDetail?.completedExercises?.length ?? 0,
              counts?.totalExce ?? 0
            )}
            className="mt-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <Image src="/star.png" alt="book" width={40} height={50} />
        <div className="w-full">
          <h2 className="flex justify-between text-2xl">
            XP Earned{' '}
            <span className="text-gray-400">
              {courseDetail?.courseEnrolledInfo?.xpEarned}/{counts?.totalXp}
            </span>
          </h2>
          <Progress
            value={UpdateProgress(
              courseDetail?.courseEnrolledInfo?.xpEarned ?? 0,
              counts?.totalXp ?? 0
            )}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
}
