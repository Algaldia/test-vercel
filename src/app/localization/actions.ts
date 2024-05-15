"use server"

import { NextRequest } from "next/server"

export async function countryLocalization(request: NextRequest){
    return request.geo?.country;
}