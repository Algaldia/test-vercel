import { NextRequest, NextResponse } from "next/server";

export function middleware(request : NextRequest) {
    const country = request.geo?.country;
    if (country) {
        localStorage.setItem("country", country);
    }

    return NextResponse.next();
    //return NextResponse.redirect(new URL("/", request.url));
}

/* export const config = {
    matcher: ['/fullscreen']
} */