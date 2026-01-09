import Image from 'next/image';
import type { Course } from '../../_components/CourseList';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { toast } from 'sonner';

type Props = {
  loading: boolean;
  courseDetail?: Course;
  refreshData: () => void;
};

export function CourseDetailBanner({
  loading,
  courseDetail,
  refreshData,
}: Props) {
  if (loading || !courseDetail) {
    return <Skeleton className="w-full h-[300px] rounded-none" />;
  }
  const [loading_, setLoading_] = useState(false);

  const EnrollCourse = async () => {
    setLoading_(true);
    const result = await axios.post('/api/enroll-course', {
      courseId: courseDetail?.courseId,
    });
    toast.success('Course Enrolled');
    refreshData();
    setLoading_(false);
  };

  return (
    <div className="relative">
      <Image
        src={courseDetail.bannerImage?.trimEnd()}
        alt={courseDetail.title}
        width={1400}
        height={300}
        className="w-full h-[350px] object-cover"
      />
      <div className="font-game absolute top-0 pt-20 p-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white-50/50 h-full">
        <h2 className="text-6xl">{courseDetail?.title}</h2>
        <p className="text-3xl mt-3 text-gray-300">{courseDetail?.desc}</p>
        {!courseDetail?.userEnrolled ? (
          <Button
            className="text-2xl mt-7"
            variant={'pixel'}
            size={'lg'}
            onClick={EnrollCourse}
            disabled={loading_}
          >
            {loading_ && <Loader2Icon className="animate-spin" />}
            Enroll Now
          </Button>
        ) : (
          <Button className="text-2xl mt-7" variant={'pixel'} size={'lg'}>
            Continue Learning...
          </Button>
        )}
      </div>
    </div>
  );
}
