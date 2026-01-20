import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTokenFromCookie, verifyToken } from '@/lib/auth';

// Public routes that don't require authentication
const publicRoutes = ['/', '/sign-in', '/sign-up', '/api/auth'];

function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + '/')
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  // Get token from cookies
  const cookieHeader = request.headers.get('cookie');
  const token = getTokenFromCookie(cookieHeader);

  if (!token) {
    // Redirect to sign-in if no token
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Verify token
  const payload = await verifyToken(token);

  if (!payload) {
    // Invalid token - redirect to sign-in
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Token is valid, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
