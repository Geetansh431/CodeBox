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

const SplitterLayout = dynamic(() => import('react-splitter-layout'), {
  ssr: false,
});

type Props = {
  courseExerciseData: courseExercise | undefined;
  loading?: boolean;
};

const CodeEditorChildren = () => {
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
      <Button variant={'pixel'} className="bg-[#a3e534] text-xl" size={'lg'}>
        Mark Completed!
      </Button>
    </div>
  );
};
export function CodeEditor({ courseExerciseData, loading }: Props) {
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
              <CodeEditorChildren />
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
