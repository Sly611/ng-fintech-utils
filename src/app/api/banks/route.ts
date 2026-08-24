import { NextRequest, NextResponse } from "next/server";
import banksData from "@/data/banks.json";
import { ratelimit } from "@/lib/rate-limiter";

export async function GET(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    console.log(ip);
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Rate limit exceeded. Too many requests, please try again later.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": limit.toString(),
            "X-RateLimit-Remaining": remaining.toString(),
            "X-RateLimit-Reset": reset.toString(),
          },
        },
      );
    }
    return NextResponse.json(
      {
        success: true,
        count: banksData.length,
        data: banksData,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        error: `failed to fetch banks ${error}`,
      },
      { status: 500 },
    );
  }
}
