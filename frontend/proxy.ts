import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from './lib/constants';

const protectedRoutes = ['/dashboard'];
const publicOnlyRoutes = ['/sign-in', '/sign-up'];

function checkIsProtectedRoute(path: string) {
  return protectedRoutes.includes(path);
}

export default async function proxy(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  const isProtectedRoute = checkIsProtectedRoute(currentPath);
  const isPublicOnlyRoute = publicOnlyRoutes.includes(currentPath);

  if (!isProtectedRoute && !isPublicOnlyRoute) return NextResponse.next();

  try {
    const cookieStore = await cookies();
    const jwt = cookieStore.get('jwt')?.value;

    // 2. Lógica para rutas de "Solo Invitados" (Sign-in/Sign-up)
    if (isPublicOnlyRoute) {
      if (jwt) {
        // Si hay token, lo mandamos al dashboard directamente
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      return NextResponse.next();
    }

    // Check if the user has a valid JWT
    if (!jwt) return NextResponse.redirect(new URL('/sign-in', request.url));

    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
    const userResponse = await response.json();
    // console.log(userResponse);

    // If the user not found, redirect to the sign-in page
    if (userResponse?.data === null)
      return NextResponse.redirect(new URL('/sign-in', request.url));

    // If the user is blocked, redirect to the sign-in page
    if (userResponse?.blocked === true)
      return NextResponse.redirect(new URL('/sign-in', request.url));

    // If the user has a valid JWT, exists and is not blocked, allow the request to pass
    return NextResponse.next();
  } catch (error) {
    console.error('Error verifying user authentication:', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/dashboard',
    '/dashboard/:path*',
  ],
};
