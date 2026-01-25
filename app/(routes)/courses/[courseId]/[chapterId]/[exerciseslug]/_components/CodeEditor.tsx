import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react';
import dynamic from 'next/dynamic';
import type { courseExercise } from '../page';
import { Button } from '@/components/ui/button';
import { dracula } from '@codesandbox/sandpack-themes';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';
import { useState } from 'react';

const SplitterLayout = dynamic(() => import('react-splitter-layout'), {
  ssr: false,
});

type Props = {
  courseExerciseData: courseExercise | undefined;
  loading?: boolean;
};

const CodeEditorChildren = ({ onCompletedExercise, IsCompleted }: any) => {
  const { sandpack } = useSandpack();
  return (
    <div className="font-game absolute bottom-40 flex gap-5 right-5">
      <Button
        variant={'pixel'}
        size={'lg'}
        className="text-xl"
        onClick={() => sandpack.runSandpack()}
      >
        Run Code
      </Button>
      <Button
        variant={'pixel'}
        className="bg-[#a3e534] text-xl"
        size={'lg'}
        disabled={IsCompleted}
        onClick={() => onCompletedExercise()}
      >
        {IsCompleted ? 'Completed !' : 'Mark Completed!'}
      </Button>
    </div>
  );
};

export function CodeEditor({ courseExerciseData, loading }: Props) {
  const { exerciseslug } = useParams();
  const [isLocallyCompleted, setIsLocallyCompleted] = useState(false);

  const exerciseIndex = courseExerciseData?.exercises?.findIndex(
    (item) => item.slug === exerciseslug
  );

  const IsCompletedFromServer = courseExerciseData?.completedExercises?.find(
    (item) => item?.exerciseId === Number(exerciseIndex) + 1
  );

  const IsCompleted = isLocallyCompleted || !!IsCompletedFromServer;

  const onCompletedExercise = async () => {
    if (exerciseIndex === undefined) return;

    // Optimistic update
    setIsLocallyCompleted(true);

    try {
      await axios.post('/api/exercise/complete', {
        courseId: courseExerciseData?.courseId,
        chapterId: courseExerciseData?.chapterId,
        exerciseId: exerciseIndex + 1,
        xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
      });
      toast.success('Exercise marked as completed!');
    } catch (error) {
      // Revert on error
      setIsLocallyCompleted(false);
      toast.error('Failed to mark exercise as completed');
    }
  };

  return (
    <div>
      <SandpackProvider
        template="static"
        theme={dracula}
        style={{ height: '100vh' }}
        files={courseExerciseData?.exerciseData?.exerciseContent?.starterCode}
        options={{
          autorun: false,
          autoReload: false,
        }}
      >
        <SandpackLayout style={{ height: '100%' }}>
          <SplitterLayout
            percentage
            primaryMinSize={30}
            secondaryMinSize={30}
            secondaryInitialSize={50}
          >
            <div className="relative h-full">
              <SandpackCodeEditor style={{ height: '100%' }} showTabs />
              <CodeEditorChildren
                onCompletedExercise={onCompletedExercise}
                IsCompleted={IsCompleted}
              />
            </div>
            <SandpackPreview
              style={{ height: '100%' }}
              showNavigator
              showOpenInCodeSandbox={false}
              showOpenNewtab
            />
          </SplitterLayout>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
