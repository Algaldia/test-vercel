"use server"

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const country = request.headers.get("x-vercel-ip-country")
    
    return new Response(JSON.stringify({country: country, nome: "Jomar"}), {
        headers: {
            "Content-Type" : "application/json"
        }
    })
}