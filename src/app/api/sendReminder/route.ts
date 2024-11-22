import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    console.log("This was executed by Cron Job");

    return NextResponse.json({
        message: "Success"
    })
}