import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

export function CodeEditor() {
  return (
    <div>
      <SandpackProvider template="static">
        <SandpackLayout>
          <SandpackCodeEditor />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
