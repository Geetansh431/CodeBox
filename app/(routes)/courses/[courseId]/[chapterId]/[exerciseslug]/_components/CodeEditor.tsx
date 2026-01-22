import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

export function CodeEditor() {
  return (
    <div>
      <SandpackProvider template="static" style={{ height: '100vh' }}>
        <SandpackLayout style={{ height: '100%' }}>
          <SplitterLayout
            percentage
            primaryMinSize={30}
            secondaryMinSize={30}
            secondaryInitialSize={50}
          >
            <SandpackCodeEditor style={{ height: '100%' }} />
            <SandpackPreview style={{ height: '100%' }} />
          </SplitterLayout>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
