'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useAuth } from '@/context/AuthContext';
import { UserDetailContext } from '@/context/UserDetailContext';

export function UserStatus() {
  const { user } = useAuth();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
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
      <div className="grid grid-cols-2 gap-5">
        <div className="flex gap-3 items-center">
          <Image src={'/star.png'} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">{user?.points || 0}</h2>
            <h2 className="font-game text-gray-500 text-xl">Total Rewards</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={'/badge.png'} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">3</h2>
            <h2 className="font-game text-gray-500 text-xl">Badge</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={'/fire.png'} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">7</h2>
            <h2 className="font-game text-gray-500 text-xl">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
