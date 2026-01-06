import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

export function CourseStatus() {
  return (
    <div className='font-game p-4 border-4 rounded-2xl w-full'>
      <h2 className='text-3xl'>Course Progress</h2>

      <div className='flex items-center gap-5 mt-4'>
        <Image src='/book.png' alt='book' width={40} height={50}/>
        <div className='w-full'>
          <h2 className='flex justify-between text-2xl'>Exercises <span className='text-gray-400'>1/72</span></h2>
          <Progress value={37} className='mt-2'/>
        </div>
      </div>

      <div className='flex items-center gap-5 mt-4'>
        <Image src='/star.png' alt='book' width={40} height={50}/>
        <div className='w-full'>
          <h2 className='flex justify-between text-2xl'>XP Earned <span className='text-gray-400'>1/340</span></h2>
          <Progress value={37} className='mt-2'/>
        </div>
      </div>

      

    </div>
  )
}

