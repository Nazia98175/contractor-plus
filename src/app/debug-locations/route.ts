export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { LOCATIONS } from "@/data/locationsData";
import axios from "axios";

interface Project {
  slug: string;
  projectName: string;
  estimateCategory: string;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ location: string }> },
) {
  console.log("\n\n🔍 ========== STEP 1: ROUTE CALLED ==========");

  try {
    // Step 1: Check params
    const { location: locationParam } = await context.params;
    console.log("✅ STEP 1 PASSED - Location param:", locationParam);

    // Step 2: Check if location exists in LOCATIONS array
    console.log("\n🔍 ========== STEP 2: CHECKING LOCATIONS ==========");
    const location = LOCATIONS.find((loc) => loc.value === locationParam);

    if (!location) {
      console.log("❌ STEP 2 FAILED - Location not found");
      console.log(
        "Available locations:",
        LOCATIONS.slice(0, 5).map((l) => l.value),
      );
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 },
      );
    }

    console.log("✅ STEP 2 PASSED - Location found:", location.label);

    // Step 3: Test API
    console.log("\n🔍 ========== STEP 3: TESTING API ==========");
    const response = await axios.get<Project[]>(
      "https://reshubapi.contractorplus.app/labor-index/projects",
      { timeout: 10000 },
    );

    console.log("✅ STEP 3 PASSED - API Response:");
    console.log("  - Status:", response.status);
    console.log("  - Total projects:", response.data.length);
    console.log("  - First 3 projects:", response.data.slice(0, 3));

    // Step 4: Return success JSON (not XML yet)
    return NextResponse.json({
      success: true,
      location: location.label,
      locationValue: location.value,
      projectCount: response.data.length,
      sampleProjects: response.data.slice(0, 5),
      message: "All steps passed! Ready to generate XML.",
    });
  } catch (error) {
    console.error("\n❌ ERROR OCCURRED:");
    console.error(error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
}
