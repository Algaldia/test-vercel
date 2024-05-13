import { NextRequest } from "next/server";

export default function Localization (request: NextRequest) {

    const country = request.geo?.country;

    return (
        <h1>Olá {country}</h1>
    )
}