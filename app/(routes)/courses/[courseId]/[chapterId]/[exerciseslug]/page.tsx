'use client';
import axios from 'axios';
import dynamic from 'next/dynamic';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SplitterLayout = dynamic(() => import('react-splitter-layout'), {
  ssr: false,
});

import 'react-splitter-layout/lib/index.css';
import { CompletedExercises, exercise } from '../../../_components/CourseList';
import { ContentSection } from './_components/ContentSection';
import { CodeEditor } from './_components/CodeEditor';
import { Button } from '@/components/ui/button';

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
  completedExercises: CompletedExercises[];
};

function Playground() {
  // course information
  const { courseId, chapterId, exerciseslug } = useParams();
  const [loading, setLoading] = useState(false);

  const [courseExerciseData, setCourseExerciseData] =
    useState<courseExercise>();
  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    courseExerciseData && GetExerciseDetail();
  }, [courseExerciseData]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseData?.exercises?.find(
      (item) => item.slug === exerciseslug
    );
    setExerciseInfo(exerciseInfo);
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
          <CodeEditor
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </div>
      </SplitterLayout>
      <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex p-4 justify-between items-center">
        <Button variant={'pixel'} className="text-xl">
          Previous
        </Button>
        <div className="flex gap-2 items-center">
          <Image src="/star.png" alt="star" height={40} width={40} />
          <h2 className="font-game text-2xl">
            You can earn{' '}
            <span className="text-green-400 text-3xl">{exerciseInfo?.xp}</span>{' '}
            Xp
          </h2>
        </div>
        <Button variant={'pixel'} className="text-xl">
          Next
        </Button>
      </div>
    </div>
  );
}

export default Playground;
