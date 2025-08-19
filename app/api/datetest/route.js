import { NextResponse } from "next/server";

export async function GET() {
    const now = new Date();
    console.log('GET /api/datetest', now);
    return NextResponse.json(now);
}