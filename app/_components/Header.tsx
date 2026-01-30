'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { LogOut, User, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
