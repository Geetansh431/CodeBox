import { Skeleton } from '@/components/ui/skeleton';
import type { courseExercise } from '../page';
import { Lightbulb } from 'lucide-react';

type Props = {
  courseExerciseData: courseExercise | undefined;
  loading?: boolean;
};

export function ContentSection({ courseExerciseData, loading }: Props) {
  const ContentInfo = courseExerciseData?.exerciseData;
  return (
    <div className="p-10">
      {loading || !ContentInfo ? (
        <Skeleton className="h-full w-full m-10 rounded-2xl" />
      ) : (
        <div className="font-game">
          <h2 className="text-3xl my-3">
            {courseExerciseData?.exerciseData?.exerciseName}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: ContentInfo?.exerciseContent?.content,
            }}
          />
          <div>
            <h2 className="text-3xl mt-4">Task</h2>
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
      )}
    </div>
  );
}
