import { Skeleton } from '@/components/ui/skeleton';
import type { ExerciseData } from '../page';
import { Lightbulb, Target, Book } from 'lucide-react';
import { memo } from 'react';

type Props = {
  exerciseData: ExerciseData | undefined;
  loading?: boolean;
};

export function ContentSection({ exerciseData, loading }: Props) {
  const ContentInfo = exerciseData;

  if (loading || !ContentInfo) {
    return (
      <div className="p-10 font-game">
        {/* Exercise Name Skeleton */}
        <Skeleton className="h-10 w-64 mb-6" />

        {/* Content Section Skeleton */}
        <div className="space-y-3 mb-8">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        {/* Task Section Skeleton */}
        <Skeleton className="h-8 w-20 mb-3" />
        <div className="p-4 border rounded-2xl bg-zinc-800 mt-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>

        {/* Hint Section Skeleton */}
        <Skeleton className="h-8 w-20 mb-3 mt-8" />
        <div className="p-4 border rounded-2xl bg-zinc-800 mt-2">
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 -mt-8 mb-32">
      <div className="font-game">
        <h2 className="text-3xl my-3 flex items-center gap-2 text-green-400">
          <Book />
          {exerciseData?.exerciseName}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: ContentInfo?.exerciseContent?.content,
          }}
        />
        <div>
          <h2 className="text-3xl mt-4 flex gap-2 items-center text-blue-400">
            <Target />
            Task
          </h2>
          <div
            className="p-4 border rounded-2xl bg-zinc-800 mt-2"
            dangerouslySetInnerHTML={{
              __html: ContentInfo?.exerciseContent?.task,
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl mt-4 flex gap-2 items-center text-yellow-400">
            <Lightbulb />
            Hint
          </h2>
          <div
            className="p-4 border rounded-2xl bg-zinc-800 mt-2"
            dangerouslySetInnerHTML={{
              __html: ContentInfo?.exerciseContent?.hint,
            }}
          />
        </div>
      </div>
    </div>
  );
}
