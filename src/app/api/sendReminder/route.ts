import { NextRequest, NextResponse } from "next/server";

function GET(request: NextRequest): NextResponse{

    console.log("This was executed by Cron Job");

    return NextResponse.json({
        message: "Success"
    })
}