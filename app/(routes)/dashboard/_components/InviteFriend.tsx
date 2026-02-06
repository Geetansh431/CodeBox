'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export function InviteFriend() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInvite = async () => {
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error('Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('/api/invite', { email: trimmed });
      toast.success(response.data.message || 'Invitation sent successfully!');
      setEmail('');
    } catch (error: any) {
      const message =
        error.response?.data?.error || 'Failed to send invitation';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900">
      <Image src={'/mail.png'} alt="mail" width={80} height={80} />
      <h2 className="text-3xl font-game">Invite Friend</h2>
      <p className="font-game">
        Having Fun? Share the love with a friend ! Enter an email and we will
        send them a personal invite
      </p>
      <div className="flex gap-2 items-center mt-5">
        <Input
          className="font-game min-w-sm"
          placeholder="Enter Invite Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          onKeyDown={(e) => e.key === 'Enter' && handleInvite()}
        />
        <Button
          variant={'pixel'}
          className="font-game"
          onClick={handleInvite}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Invite'}
        </Button>
      </div>
    </div>
  );
}
