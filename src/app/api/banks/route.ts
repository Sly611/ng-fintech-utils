import { NextRequest, NextResponse } from "next/server";
import banksData from "@/data/banks.json";
import { ratelimit } from "@/lib/rate-limiter";

export async function GET(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    const { success, limit, reset, remaining } = await ratelimit.limit(ip);

    const rateLimitHeaders = {
      "X-RateLimit-Limit": limit.toString(),
      "X-RateLimit-Remaining": remaining.toString(),
      "X-RateLimit-Reset": reset.toString(),
    };

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Rate limit exceeded. Too many requests, please try again later.",
        },
        {
          status: 429,
          headers: rateLimitHeaders,
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
        headers: rateLimitHeaders,
      },
    );
  } catch (error) {
    console.error("GET /api/banks failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch banks. Please try again later.",
      },
      { status: 500 },
    );
  }
}
