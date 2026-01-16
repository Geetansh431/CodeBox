'use client';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

function Playground() {
  // course information

  return (
    <div className="border-top-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>Content</div>
        <div>Code Editor</div>
      </SplitterLayout>
    </div>
  );
}

export default Playground;
