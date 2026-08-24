import { NextRequest, NextResponse } from "next/server";
import banksData from "@/data/banks.json";
import { ratelimit } from "@/lib/rate-limiter";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

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

    const { slug } = await params;
    const bank = banksData.find(
      (b) => b.slug === slug.toLowerCase() || b.code === slug,
    );

    if (!bank) {
      return NextResponse.json(
        {
          success: false,
          error: `Bank with identifier '${slug}' not found`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: bank,
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
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
