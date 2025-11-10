import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "project-cost-6.xml");
    const xmlContent = fs.readFileSync(filePath, "utf-8");

    return new NextResponse(xmlContent, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read XML file" },
      { status: 500 },
    );
  }
}
