'use client';
import axios from 'axios';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { exercise } from '../../../_components/CourseList';
import { ContentSection } from './_components/ContentSection';
import { CodeEditor } from './_components/CodeEditor';

type ExercisesContent = {
  content: string;
  hint: string;
  hintXp: string;
  starterCode: any;
  task: string;
};

type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseId: number;
  exerciseName: string;
  exerciseContent: ExercisesContent;
};

export type courseExercise = {
  chapterId: number;
  courseId: number;
  desc: string;
  name: string;
  exercises: exercise[];
  exerciseData: ExerciseData;
};

function Playground() {
  // course information
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);

  const [courseExerciseData, setCourseExerciseData] =
    useState<courseExercise>();

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
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </div>
        <div>
          <CodeEditor />
        </div>
      </SplitterLayout>
    </div>
  );
}

export default Playground;
