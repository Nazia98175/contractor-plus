import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ location: string }> },
) {
  const { location } = await context.params;

  console.log("🎯 ROUTE CALLED! Location:", location);

  return NextResponse.json({
    message: "Route works!",
    location: location,
  });
}
