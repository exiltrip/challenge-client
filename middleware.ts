import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = true;

    if (!token && request.nextUrl.pathname.startsWith('/personal-challenges')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    if (!token && request.nextUrl.pathname.startsWith('/daily-challenge')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}
