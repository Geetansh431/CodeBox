'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { UserButton, useUser } from '@clerk/nextjs'

const courses = [
  {
    id: 1,
    name: 'HTML',
    desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
    path: '/course/1/detail'
  },
  {
    id: 2,
    name: 'CSS',
    desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
    path: '/course/2/detail'
  },
  {
    id: 3,
    name: 'React',
    desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
    path: '/course/3/detail'
  },
  {
    id: 4,
    name: 'JavaScript',
    desc: 'Understand core JavaScript concepts and write powerful, interactive scripts for the web.',
    path: '/course/4/detail'
  },
  {
    id: 5,
    name: 'Node.js',
    desc: 'Learn backend development with Node.js and build scalable server-side applications.',
    path: '/course/5/detail'
  },
  {
    id: 6,
    name: 'MongoDB',
    desc: 'Work with MongoDB to design databases, store data efficiently, and build full-stack apps.',
    path: '/course/6/detail'
  },
  {
    id: 7,
    name: 'Tailwind CSS',
    desc: 'Use Tailwind CSS to build modern, utility-first, highly customizable UI designs.',
    path: '/course/7/detail'
  },
  {
    id: 8,
    name: 'Next.js',
    desc: 'Create fast, SEO-friendly web applications using the Next.js React framework.',
    path: '/course/8/detail'
  }
];


export function Header() {

  // const { user } = useUser();
  const { user } = useUser();

  return (
    <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
            <Image src={'/crown.png'} alt='logo' width={40} height={40}/>
            <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
        </div>
        {/* Navbar */}
        <NavigationMenu className='font-game text-xl'>
            <NavigationMenuList className='gap-8'>
                
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-xl'>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]'>
                            {courses.map((course,index)=>(
                                <div key={index} className='p-2 hover:bg-accent rounded-xl'>
                                    <h2 className='font-medium'>{course.name}</h2>
                                    <p className='text-sm text-gray-500'>{course.desc}</p>
                                </div>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className='text-xl'>
                        <Link href="/projects"> Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className='text-xl'>
                        <Link href="/pricing"> Pricing</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className='text-xl'>
                        <Link href="/contact-us"> Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
        
        {/*Signup */}
        
        {!user ? (
          <Link href={'/sign-up'}>
            <Button className="font-game text-2xl" variant="pixel"> Signup </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Button className="font-game text-2xl" variant="pixel"> Dashboard </Button>
            <UserButton />
          </div>
        )}

    </div>
  )
}
