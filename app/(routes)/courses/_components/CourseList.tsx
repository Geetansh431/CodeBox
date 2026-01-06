"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { ChartNoAxesColumnDecreasingIcon } from 'lucide-react';
import Link from 'next/link';

type exercise = {
    name: string,
    slug: string,
    xp: number,
    difficulty?: string,
}

type Chapter = {
    chapterId: number,
    courseId: number,
    desc: string,
    name: string,
    id: number
    exercises: exercise[]
}

export type Course = {
    id: number,
    courseId: number,
    title: string,
    desc: string,
    level:string,
    bannerImage: string,
    tag: string
    chapters?: Chapter[]
}

export function CourseList() {

    const [CourseList, setCoursesList] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        GetAllCourses()
    }, []);

    const GetAllCourses = async () => {
        setLoading(true);
        const result = await axios.get('/api/course');
        setCoursesList(result?.data);
        setLoading(false);
    } 

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3 mb-6'>
           
            {CourseList?.map((course,index)=>(
                <Link href={`/courses/${course?.courseId}`} key={index}>
                <div  className='border-4 rounded-xl hover:bg-zinc-900 cursor-pointer'>
                    <Image src={course?.bannerImage} width={400} height={400} alt={course?.title} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='p-4'>
                        <h2 className='font-game text-2xl'>{course?.title}</h2>
                        <p className='font-game text-xl text-gray-400 line-clamp-2'>{course?.desc}</p>

                        <h2 className='bg-zinc-800 gap-2 font-game p-1 mt-3 px-4 rounded-2xl items-center inline-flex'>
                            <ChartNoAxesColumnDecreasingIcon className='h-3 w-4'/>
                            {course?.level}
                        </h2>
                    </div>
                </div>
                 </Link>
            ))}
        </div>
    )
}
