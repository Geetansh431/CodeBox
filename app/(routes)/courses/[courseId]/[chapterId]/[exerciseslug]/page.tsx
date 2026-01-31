'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';
import { CompletedExercises, exercise } from '../../../_components/CourseList';
import { ContentSection } from './_components/ContentSection';
import { CodeEditor } from './_components/CodeEditor';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ExercisesContent = {
  content: string;
  hint: string;
  hintXp: string;
  starterCode: any;
  task: string;
};

export type ExerciseData = {
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
  editorType?: string;
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

  const currentIndex =
    courseExerciseData?.exercises?.findIndex(
      (item) => item.slug === exerciseslug
    ) ?? -1;

  const previousRoute =
    currentIndex > 0 && courseExerciseData?.exercises?.[currentIndex - 1]?.slug
      ? `/courses/${courseId}/${chapterId}/${courseExerciseData.exercises[currentIndex - 1].slug}`
      : '/courses/' + courseId;

  const nextRoute = courseExerciseData?.exercises?.[currentIndex + 1]?.slug
    ? `/courses/${courseId}/${chapterId}/${courseExerciseData.exercises[currentIndex + 1].slug}`
    : '';

  return (
    <div className="border-t-4 h-screen flex flex-col">
      <PanelGroup direction="horizontal" className="flex-1">
        <Panel defaultSize={40} minSize={40}>
          <div className="h-full overflow-y-auto">
            <ContentSection
              exerciseData={courseExerciseData?.exerciseData}
              loading={loading}
            />
          </div>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={60} minSize={20}>
          <CodeEditor
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </Panel>
      </PanelGroup>
      <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex p-4 justify-between items-center">
        <Link href={previousRoute}>
          <Button variant={'pixel'} className="text-xl">
            Previous
          </Button>
        </Link>
        <div className="flex gap-2 items-center">
          <Image src="/star.png" alt="star" height={40} width={40} />
          <h2 className="font-game text-2xl">
            You can earn{' '}
            <span className="text-green-400 text-3xl">{exerciseInfo?.xp}</span>{' '}
            Xp
          </h2>
        </div>
        <Link href={nextRoute}>
          <Button variant={'pixel'} className="text-xl">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Playground;
