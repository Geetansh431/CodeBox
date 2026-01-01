"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

export const WelcomeBanner = () => {
    
    const { user } = useUser();

    return (
        <div className='flex gap-3 items-center'>
            <Image src={'/machine.webp'} alt="Welcome Banner" width={120} height={120} />
            <h2 className='font-game text-2xl p-4 border bg-zinc-800 rounded-lg rounded-bl-none'>Welcome Back <span className='text-yellow-500'>{user?.username}</span>, Start Learning somethign new...</h2>
        </div>
    )
}

