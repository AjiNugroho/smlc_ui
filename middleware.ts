import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const publicRoutes = [
    '/login',
    '/reset-password',
  ]

const isPublicRoute = (path: string) => {
  return publicRoutes.some(route => path.startsWith(route))
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const token = request.cookies.get('auth-token')?.value

    if (isPublicRoute(pathname)) {
        if (token && pathname === '/login') {
            return NextResponse.redirect(new URL('/', request.url))
        }

        return NextResponse.next()
    }

    if (!token) {
        // Store the original intended destination
        const searchParams = new URLSearchParams({
          redirect: pathname,
        })
        
        // Redirect to login with the return URL
        return NextResponse.redirect(
          new URL(`/login?${searchParams.toString()}`, request.url)
        )
    }

    try {
        // Here you would typically verify the token
        // This is a dummy implementation
        const isValidToken = token.length > 10 // Simple dummy validation
    
        if (!isValidToken) {
          // Clear invalid token
          const response = NextResponse.redirect(new URL('/login', request.url))
          response.cookies.delete('auth-token')
          return response
        }
        // Token is valid, allow request to proceed
        return NextResponse.next()
      } catch (error) {
        console.log(error)
        const response = NextResponse.redirect(new URL('/login', request.url))
        response.cookies.delete('auth-token')
        return response
    }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - public folder
       */
      '/((?!_next/static|_next/image|favicon.ico|public/|assets/).*)',
    ],
}