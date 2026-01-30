'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

export const WelcomeBanner = () => {
  const { user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <Image
        src={'/machine.webp'}
        alt="Welcome Banner"
        width={120}
        height={120}
      />
      <h2 className="font-game text-2xl p-4 border bg-zinc-800 rounded-lg rounded-bl-none">
        Welcome Back{' '}
        {isMounted && <span className="text-yellow-500">{user?.name}</span>},
        Start Learning something new...
      </h2>
    </div>
  );
};
