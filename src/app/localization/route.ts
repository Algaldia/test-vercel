import { NextRequest } from "next/server"

export async function GET(request : NextRequest) {
    const country = await request.geo?.country;
    console.log(country);
    return new Response(country);
}