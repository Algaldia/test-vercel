import { NextRequest, NextResponse } from "next/server";

export function middleware(request : NextRequest) {
    const country = request.geo?.country;
    return NextResponse.json({
        country
    })
    //return NextResponse.redirect(new URL("/", request.url));
}

/* export const config = {
    matcher: ['/fullscreen']
} */