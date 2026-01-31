'use client';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { Skeleton } from '@/components/ui/skeleton';

export function UserStatus() {
  const { user, isLoading } = useAuth();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Show skeleton until all data is loaded (including streak)
  if (!isHydrated || !user || isLoading || typeof user?.streak !== 'number') {
    return (
      <div className="p-4 border-4 rounded-2xl">
        <div className="flex gap-3 items-center mb-4">
          <Skeleton className="w-[70px] h-[70px] rounded-full" />
          <Skeleton className="w-32 h-6 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-5 px-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-3 items-center">
              <Skeleton className="w-[35px] h-[35px] rounded-full" />
              <div className="flex-1">
                <Skeleton className="w-12 h-8 rounded-lg mb-2" />
                <Skeleton className="w-24 h-5 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 border-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <Image
          src={'/alex_walk.gif'}
          alt="walking_user"
          width={70}
          height={70}
        />
        <h2 className="font-game text-xl">{user?.email}</h2>
      </div>
      <div className="grid grid-cols-2 gap-5 px-4">
        <div className="flex gap-3 items-center">
          <Image src={'/star.png'} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game px-5">{user?.points || 0}</h2>
            <h2 className="font-game text-gray-500 text-xl px-5">Points</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={'/fire.png'} alt="fire" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">{user.streak}</h2>
            <h2 className="font-game text-gray-500 text-xl">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
