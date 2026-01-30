'use client';

import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  loading?: boolean;
};

const planDetails: { [key: string]: { icon: string; description: string } } = {
  Starter: {
    icon: '🚀',
    description: 'Access to 5 free exercise for each course',
  },
  Pro: {
    icon: '⭐',
    description: 'Access to All Exercises',
  },
  Premium: {
    icon: '👑',
    description: 'All Pro features, AI-powered code review',
  },
};

export function UpgradeToPro({ loading }: Props = {}) {
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const response = await axios.get('/api/user');
        setCurrentPlan(response.data?.subscription || 'Starter');
      } catch {
        setCurrentPlan('Starter');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserPlan();
  }, []);

  if (loading || isLoading) {
    return (
      <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-8 w-32 mt-4" />
        <Skeleton className="h-6 w-48 mt-3" />
        <Skeleton className="h-4 w-40 mt-4" />
      </div>
    );
  }

  const plan = currentPlan || 'Starter';
  const details = planDetails[plan];

  return (
    <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
      <Image src={'/logo.png'} alt="logo" width={70} height={70} />
      <h2 className="font-game text-2xl">
        You have opted for{' '}
        <span className="text-yellow-400 text-3xl">{plan}</span> plan
      </h2>
    </div>
  );
}
