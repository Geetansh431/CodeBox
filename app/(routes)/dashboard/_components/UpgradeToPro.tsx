import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  loading?: boolean;
};

export function UpgradeToPro({ loading }: Props = {}) {
  if (loading) {
    return (
      <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-8 w-32 mt-4" />
        <Skeleton className="h-6 w-48 mt-3" />
        <Skeleton className="h-12 w-32 mt-4" />
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
      <Image src={'/logo.png'} alt="logo" width={70} height={70} />
      <h2 className="text-3xl font-game">Upgrade to Pro</h2>
      <p className="font-game text-gray-500 text-xl text-center">
        Join Pro Membership and Get All course access
      </p>
      <Link href={'/pricing'}>
        <Button className="font-game text-2xl" variant={'pixel'} size={'lg'}>
          Upgrade
        </Button>
      </Link>
    </div>
  );
}
