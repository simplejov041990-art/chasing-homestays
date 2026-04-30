import { NextResponse } from "next/server";

/**
 * Phase 2 stub: Hospitable Public API integration.
 *
 * Activate when ready to move beyond the embed widget.
 * Docs: https://developer.hospitable.com/
 *
 * Steps:
 * 1. Create token in Hospitable: Apps → Public API
 * 2. Add HOSPITABLE_API_TOKEN to .env.local (server-only, no NEXT_PUBLIC_)
 * 3. Replace the hardcoded array in app/properties/page.tsx with:
 *      const res = await fetch('/api/listings');
 *      const properties = await res.json();
 */
export async function GET() {
  const token = process.env.HOSPITABLE_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "HOSPITABLE_API_TOKEN not configured" },
      { status: 500 }
    );
  }

  try {
    // Verify the exact endpoint and shape against Hospitable's current API docs
    const res = await fetch("https://public.api.hospitable.com/v2/listings", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      // Cache for 5 min to avoid hammering the API
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Hospitable API error: ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch listings", details: String(err) },
      { status: 500 }
    );
  }
}
