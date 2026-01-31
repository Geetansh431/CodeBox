'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export function Header() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useRouter();
  const handleLogoClick = () => {
    navigate.push('/');
  };
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full font-game">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <Image src={'/crown.png'} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-3xl font-game">CodeBox</h2>
      </div>
      {/* Navbar */}
      <NavigationMenu className="font-game text-xl">
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-xl">
              <Link href="/courses"> Courses</Link>
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
      {/* Auth Buttons */}
      {isLoading ? (
        <Skeleton className="w-[120px] h-[32px] rounded-lg" />
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
        </div>
      )}
    </div>
  );
}
