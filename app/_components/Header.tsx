'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { LogOut, User, ChevronDown } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: 'HTML',
    desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
    path: '/course/1/detail',
  },
  {
    id: 2,
    name: 'CSS',
    desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
    path: '/course/2/detail',
  },
  {
    id: 3,
    name: 'React',
    desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
    path: '/course/3/detail',
  },
  {
    id: 4,
    name: 'JavaScript',
    desc: 'Understand core JavaScript concepts and write powerful, interactive scripts for the web.',
    path: '/course/4/detail',
  },
  {
    id: 5,
    name: 'Node.js',
    desc: 'Learn backend development with Node.js and build scalable server-side applications.',
    path: '/course/5/detail',
  },
  {
    id: 6,
    name: 'MongoDB',
    desc: 'Work with MongoDB to design databases, store data efficiently, and build full-stack apps.',
    path: '/course/6/detail',
  },
  {
    id: 7,
    name: 'Tailwind CSS',
    desc: 'Use Tailwind CSS to build modern, utility-first, highly customizable UI designs.',
    path: '/course/7/detail',
  },
  {
    id: 8,
    name: 'Next.js',
    desc: 'Create fast, SEO-friendly web applications using the Next.js React framework.',
    path: '/course/8/detail',
  },
];

export function Header() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const path = usePathname();
  const { exerciseslug } = useParams();

  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full font-game">
      <div className="flex gap-2 items-center">
        <Image src={'/crown.png'} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-3xl font-game">CodeBox</h2>
      </div>
      {/* Navbar */}
      {!exerciseslug ? (
        <NavigationMenu className="font-game text-xl">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Courses
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                  {courses.map((course, index) => (
                    <div key={index} className="p-2 hover:bg-accent rounded-xl">
                      <h2 className="font-medium">{course.name}</h2>
                      <p className="text-sm text-gray-500">{course.desc}</p>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl">
                <Link href="/projects"> Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl">
                <Link href="/pricing"> Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl">
                <Link href="/contact-us"> Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <h2 className="text-2xl">
          {exerciseslug?.toString()?.replaceAll('-', ' ').toLocaleUpperCase()}
        </h2>
      )}

      {/* Auth Buttons */}
      {isLoading ? (
        <div className="w-[120px] h-[44px]" />
      ) : !isAuthenticated ? (
        <Link href={'/sign-up'}>
          <Button className="font-game text-2xl" variant="pixel">
            Signup
          </Button>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button className="font-game text-2xl" variant="pixel">
              Dashboard
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <div className="px-2 py-1.5 text-sm font-medium">
                {user?.name}
              </div>
              <div className="px-2 py-1 text-xs text-muted-foreground">
                {user?.email}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                className="cursor-pointer text-red-500 focus:text-red-500"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}
