import { Skeleton } from '@/components/ui/skeleton';
import type { courseExercise } from '../page';

type Props = {
  courseExerciseData: courseExercise | undefined;
  loading?: boolean;
};

export function ContentSection({ courseExerciseData, loading }: Props) {
  return (
    <div>
      {loading || !courseExerciseData ? (
        <Skeleton className="h-full w-full m-10 rounded-2xl" />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: courseExerciseData?.exerciseData?.exerciseContent?.content,
          }}
        ></div>
      )}
    </div>
  );
}
