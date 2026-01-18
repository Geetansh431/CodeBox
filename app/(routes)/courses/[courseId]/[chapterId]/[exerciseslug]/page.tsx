'use client';
import axios from 'axios';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

function Playground() {
  // course information
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetExerciseCourseDetail();
  }, []);

  const GetExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post('/api/exercise', {
      courseId: courseId,
      chapterId: chapterId,
      exerciseId: exerciseslug,
    });
    setLoading(true);
  };

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>Content</div>
        <div>Code Editor</div>
      </SplitterLayout>
    </div>
  );
}

export default Playground;
