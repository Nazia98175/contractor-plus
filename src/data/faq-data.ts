export interface FAQ {
  question: string;
  answer: string;
}

export interface CityPermitCost {
  lowPermitCost: number;
  highPermitCost: number;
}

export interface TimelineStep {
  title: string;
  duration: string;
  description: string;
}

export interface ProjectTimeline {
  slug: string;
  steps: TimelineStep[];
  videoUrl?: string;
}

export interface ProjectFAQ {
  slug: string;
  faqs: FAQ[];
}

// City-specific permit costs
export const cityPermitCosts: Record<string, CityPermitCost> = {
  // ─── Top 20 already supplied ────────────────────────────────────────────────
  "new-york-ny": { lowPermitCost: 150, highPermitCost: 300 },
  "los-angeles-ca": { lowPermitCost: 120, highPermitCost: 250 },
  "chicago-il": { lowPermitCost: 100, highPermitCost: 200 },
  "houston-tx": { lowPermitCost: 80, highPermitCost: 175 },
  "phoenix-az": { lowPermitCost: 75, highPermitCost: 150 },
  "philadelphia-pa": { lowPermitCost: 90, highPermitCost: 180 },
  "san-antonio-tx": { lowPermitCost: 70, highPermitCost: 140 },
  "san-diego-ca": { lowPermitCost: 110, highPermitCost: 230 },
  "dallas-tx": { lowPermitCost: 85, highPermitCost: 170 },
  "san-jose-ca": { lowPermitCost: 130, highPermitCost: 270 },
  "austin-tx": { lowPermitCost: 75, highPermitCost: 160 },
  "jacksonville-fl": { lowPermitCost: 65, highPermitCost: 130 },
  "fort-worth-tx": { lowPermitCost: 80, highPermitCost: 165 },
  "columbus-oh": { lowPermitCost: 70, highPermitCost: 140 },
  "charlotte-nc": { lowPermitCost: 75, highPermitCost: 155 },
  "san-francisco-ca": { lowPermitCost: 200, highPermitCost: 400 },
  "indianapolis-in": { lowPermitCost: 65, highPermitCost: 135 },
  "seattle-wa": { lowPermitCost: 120, highPermitCost: 240 },
  "denver-co": { lowPermitCost: 85, highPermitCost: 175 },
  "boston-ma": { lowPermitCost: 140, highPermitCost: 280 },
  "national-average": { lowPermitCost: 75, highPermitCost: 150 },
  "washington-dc": { lowPermitCost: 140, highPermitCost: 280 },
  "el-paso-tx": { lowPermitCost: 60, highPermitCost: 120 },
  "detroit-mi": { lowPermitCost: 70, highPermitCost: 150 },
  "nashville-tn": { lowPermitCost: 80, highPermitCost: 160 },
  "portland-or": { lowPermitCost: 100, highPermitCost: 200 },
  "memphis-tn": { lowPermitCost: 65, highPermitCost: 135 },
  "oklahoma-city-ok": { lowPermitCost: 65, highPermitCost: 135 },
  "las-vegas-nv": { lowPermitCost: 90, highPermitCost: 180 },
  "louisville-ky": { lowPermitCost: 70, highPermitCost: 140 },
  "baltimore-md": { lowPermitCost: 90, highPermitCost: 180 },
  "milwaukee-wi": { lowPermitCost: 70, highPermitCost: 145 },
  "albuquerque-nm": { lowPermitCost: 60, highPermitCost: 125 },
  "tucson-az": { lowPermitCost: 60, highPermitCost: 120 },
  "fresno-ca": { lowPermitCost: 70, highPermitCost: 140 },
  "mesa-az": { lowPermitCost: 65, highPermitCost: 130 },
  "sacramento-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "atlanta-ga": { lowPermitCost: 95, highPermitCost: 190 },
  "kansas-city-mo": { lowPermitCost: 70, highPermitCost: 145 },
  "colorado-springs-co": { lowPermitCost: 70, highPermitCost: 140 },
  "omaha-ne": { lowPermitCost: 65, highPermitCost: 130 },
  "raleigh-nc": { lowPermitCost: 75, highPermitCost: 150 },
  "miami-fl": { lowPermitCost: 100, highPermitCost: 200 },
  "long-beach-ca": { lowPermitCost: 110, highPermitCost: 220 },
  "virginia-beach-va": { lowPermitCost: 80, highPermitCost: 160 },
  "oakland-ca": { lowPermitCost: 120, highPermitCost: 240 },
  "minneapolis-mn": { lowPermitCost: 90, highPermitCost: 180 },
  "tulsa-ok": { lowPermitCost: 60, highPermitCost: 125 },
  "arlington-tx": { lowPermitCost: 70, highPermitCost: 145 },
  "new-orleans-la": { lowPermitCost: 85, highPermitCost: 170 },
  "wichita-ks": { lowPermitCost: 60, highPermitCost: 120 },
  "cleveland-oh": { lowPermitCost: 75, highPermitCost: 150 },
  "tampa-fl": { lowPermitCost: 85, highPermitCost: 170 },
  "bakersfield-ca": { lowPermitCost: 65, highPermitCost: 130 },
  "aurora-co": { lowPermitCost: 70, highPermitCost: 140 },
  "anaheim-ca": { lowPermitCost: 110, highPermitCost: 220 },
  "honolulu-hi": { lowPermitCost: 130, highPermitCost: 260 },
  "santa-ana-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "corpus-christi-tx": { lowPermitCost: 60, highPermitCost: 120 },
  "riverside-ca": { lowPermitCost: 85, highPermitCost: 170 },
  "lexington-ky": { lowPermitCost: 70, highPermitCost: 140 },
  "stockton-ca": { lowPermitCost: 75, highPermitCost: 150 },
  "henderson-nv": { lowPermitCost: 85, highPermitCost: 170 },
  "saint-paul-mn": { lowPermitCost: 85, highPermitCost: 170 },
  "st-louis-mo": { lowPermitCost: 85, highPermitCost: 170 },
  "cincinnati-oh": { lowPermitCost: 70, highPermitCost: 145 },
  "pittsburgh-pa": { lowPermitCost: 80, highPermitCost: 160 },
  "greensboro-nc": { lowPermitCost: 65, highPermitCost: 130 },
  "anchorage-ak": { lowPermitCost: 90, highPermitCost: 180 },
  "plano-tx": { lowPermitCost: 75, highPermitCost: 150 },
  "lincoln-ne": { lowPermitCost: 60, highPermitCost: 125 },
  "orlando-fl": { lowPermitCost: 85, highPermitCost: 170 },
  "irvine-ca": { lowPermitCost: 120, highPermitCost: 240 },
  "newark-nj": { lowPermitCost: 90, highPermitCost: 180 },
  "durham-nc": { lowPermitCost: 70, highPermitCost: 140 },
  "chula-vista-ca": { lowPermitCost: 85, highPermitCost: 170 },
  "toledo-oh": { lowPermitCost: 65, highPermitCost: 130 },
  "fort-wayne-in": { lowPermitCost: 60, highPermitCost: 120 },
  "st-petersburg-fl": { lowPermitCost: 80, highPermitCost: 160 },
  "laredo-tx": { lowPermitCost: 55, highPermitCost: 110 },
  "jersey-city-nj": { lowPermitCost: 100, highPermitCost: 200 },
  "chandler-az": { lowPermitCost: 70, highPermitCost: 140 },
  "madison-wi": { lowPermitCost: 75, highPermitCost: 150 },
  "lubbock-tx": { lowPermitCost: 55, highPermitCost: 110 },
  "norfolk-va": { lowPermitCost: 75, highPermitCost: 150 },
  "winston-salem-nc": { lowPermitCost: 60, highPermitCost: 125 },
  "glendale-az": { lowPermitCost: 70, highPermitCost: 140 },
  "garland-tx": { lowPermitCost: 65, highPermitCost: 130 },
  "hialeah-fl": { lowPermitCost: 70, highPermitCost: 140 },
  "reno-nv": { lowPermitCost: 80, highPermitCost: 160 },
  "chesapeake-va": { lowPermitCost: 70, highPermitCost: 140 },
  "gilbert-az": { lowPermitCost: 70, highPermitCost: 140 },
  "baton-rouge-la": { lowPermitCost: 75, highPermitCost: 150 },
  "irving-tx": { lowPermitCost: 70, highPermitCost: 140 },
  "scottsdale-az": { lowPermitCost: 85, highPermitCost: 170 },
  "north-las-vegas-nv": { lowPermitCost: 80, highPermitCost: 160 },
  "fremont-ca": { lowPermitCost: 110, highPermitCost: 220 },
  "boise-id": { lowPermitCost: 65, highPermitCost: 130 },
  "richmond-va": { lowPermitCost: 80, highPermitCost: 160 },
  "san-bernardino-ca": { lowPermitCost: 75, highPermitCost: 150 },
  "birmingham-al": { lowPermitCost: 65, highPermitCost: 130 },
  "spokane-wa": { lowPermitCost: 70, highPermitCost: 140 },
  "rochester-ny": { lowPermitCost: 70, highPermitCost: 140 },
  "des-moines-ia": { lowPermitCost: 65, highPermitCost: 130 },
  "modesto-ca": { lowPermitCost: 70, highPermitCost: 140 },
  "fayetteville-nc": { lowPermitCost: 60, highPermitCost: 120 },
  "tacoma-wa": { lowPermitCost: 80, highPermitCost: 160 },
  "oxnard-ca": { lowPermitCost: 85, highPermitCost: 170 },
  "fontana-ca": { lowPermitCost: 75, highPermitCost: 150 },
  "columbus-ga": { lowPermitCost: 55, highPermitCost: 110 },
  "montgomery-al": { lowPermitCost: 55, highPermitCost: 110 },
  "moreno-valley-ca": { lowPermitCost: 70, highPermitCost: 140 },
  "shreveport-la": { lowPermitCost: 60, highPermitCost: 120 },
  "aurora-il": { lowPermitCost: 65, highPermitCost: 130 },
  "yonkers-ny": { lowPermitCost: 85, highPermitCost: 170 },
  "akron-oh": { lowPermitCost: 60, highPermitCost: 120 },
  "huntington-beach-ca": { lowPermitCost: 105, highPermitCost: 210 },
  "little-rock-ar": { lowPermitCost: 60, highPermitCost: 120 },
  "augusta-ga": { lowPermitCost: 55, highPermitCost: 115 },
  "amarillo-tx": { lowPermitCost: 55, highPermitCost: 110 },
  "glendale-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "mobile-al": { lowPermitCost: 60, highPermitCost: 120 },
  "grand-rapids-mi": { lowPermitCost: 65, highPermitCost: 130 },
  "salt-lake-city-ut": { lowPermitCost: 90, highPermitCost: 180 },
  "tallahassee-fl": { lowPermitCost: 60, highPermitCost: 120 },
  "huntsville-al": { lowPermitCost: 60, highPermitCost: 120 },
  "grand-prairie-tx": { lowPermitCost: 65, highPermitCost: 130 },
  "knoxville-tn": { lowPermitCost: 65, highPermitCost: 130 },
  "worcester-ma": { lowPermitCost: 75, highPermitCost: 150 },
  "newport-news-va": { lowPermitCost: 70, highPermitCost: 140 },
  "brownsville-tx": { lowPermitCost: 55, highPermitCost: 110 },
  "overland-park-ks": { lowPermitCost: 60, highPermitCost: 120 },
  "santa-clarita-ca": { lowPermitCost: 95, highPermitCost: 190 },
  "providence-ri": { lowPermitCost: 80, highPermitCost: 160 },
  "garden-grove-ca": { lowPermitCost: 95, highPermitCost: 190 },
  "chattanooga-tn": { lowPermitCost: 60, highPermitCost: 120 },
  "oceanside-ca": { lowPermitCost: 95, highPermitCost: 190 },
  "jackson-ms": { lowPermitCost: 55, highPermitCost: 110 },
  "fort-lauderdale-fl": { lowPermitCost: 100, highPermitCost: 200 },
  "santa-rosa-ca": { lowPermitCost: 95, highPermitCost: 190 },
  "rancho-cucamonga-ca": { lowPermitCost: 90, highPermitCost: 180 },
  "port-st-lucie-fl": { lowPermitCost: 70, highPermitCost: 140 },
  "tempe-az": { lowPermitCost: 70, highPermitCost: 140 },
  "ontario-ca": { lowPermitCost: 80, highPermitCost: 160 },
  "vancouver-wa": { lowPermitCost: 75, highPermitCost: 150 },
  "cape-coral-fl": { lowPermitCost: 70, highPermitCost: 140 },
  "sioux-falls-sd": { lowPermitCost: 55, highPermitCost: 115 },
  "springfield-mo": { lowPermitCost: 55, highPermitCost: 115 },
  "peoria-az": { lowPermitCost: 65, highPermitCost: 130 },
  "pembroke-pines-fl": { lowPermitCost: 75, highPermitCost: 150 },
  "elk-grove-ca": { lowPermitCost: 80, highPermitCost: 160 },
  "rockford-il": { lowPermitCost: 60, highPermitCost: 120 },
  "palmdale-ca": { lowPermitCost: 80, highPermitCost: 160 },
  "corona-ca": { lowPermitCost: 85, highPermitCost: 170 },
  "salinas-ca": { lowPermitCost: 80, highPermitCost: 160 },
  "pomona-ca": { lowPermitCost: 85, highPermitCost: 170 },
  "paterson-nj": { lowPermitCost: 85, highPermitCost: 170 },
  "joliet-il": { lowPermitCost: 65, highPermitCost: 130 },
  "kansas-city-ks": { lowPermitCost: 60, highPermitCost: 125 },
  "torrance-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "syracuse-ny": { lowPermitCost: 65, highPermitCost: 130 },
  "bridgeport-ct": { lowPermitCost: 85, highPermitCost: 170 },
  "hayward-ca": { lowPermitCost: 90, highPermitCost: 180 },
  "fort-collins-co": { lowPermitCost: 70, highPermitCost: 140 },
  "escondido-ca": { lowPermitCost: 90, highPermitCost: 180 },
  "lakewood-co": { lowPermitCost: 70, highPermitCost: 140 },
  "naperville-il": { lowPermitCost: 75, highPermitCost: 150 },
  "dayton-oh": { lowPermitCost: 60, highPermitCost: 120 },
  "hollywood-fl": { lowPermitCost: 85, highPermitCost: 170 },
  "sunnyvale-ca": { lowPermitCost: 110, highPermitCost: 220 },
  "alexandria-va": { lowPermitCost: 90, highPermitCost: 180 },
  "mesquite-tx": { lowPermitCost: 65, highPermitCost: 130 },
  "hampton-va": { lowPermitCost: 70, highPermitCost: 140 },
  "pasadena-ca": { lowPermitCost: 110, highPermitCost: 220 },
  "orange-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "savannah-ga": { lowPermitCost: 70, highPermitCost: 140 },
  "cary-nc": { lowPermitCost: 70, highPermitCost: 140 },
  "fullerton-ca": { lowPermitCost: 100, highPermitCost: 200 },
  "warren-mi": { lowPermitCost: 65, highPermitCost: 130 },
  "mckinney-tx": { lowPermitCost: 70, highPermitCost: 140 },
  "albany-ny": { lowPermitCost: 70, highPermitCost: 140 },
};

// Timeline data by project type
// export const projectTimelines: ProjectTimeline[] = [
//   {
//     slug: "install-a-new-toilet",
//     videoUrl: "https://www.youtube.com/watch?v=BpHweV3G1Uw",
//     steps: [
//       {
//         title: "Preparation & Removal",
//         duration: "0.5-1 hour",
//         description:
//           "Turn off water supply, drain toilet, disconnect supply line, and carefully remove existing toilet. Inspect flange and subfloor for damage that may need repair before installation.",
//       },
//       {
//         title: "Installation",
//         duration: "1-1.5 hours",
//         description:
//           "Install new wax ring, position and secure toilet, and connect water supply. Professional {location} contractors ensure proper sealing and code compliance.",
//       },
//       {
//         title: "Setup & Testing",
//         duration: "0.5-1 hour",
//         description:
//           "Test flush mechanism, check for leaks, and ensure proper operation. Make necessary adjustments for optimal performance.",
//       },
//       {
//         title: "Final Cleanup",
//         duration: "0.5 hour",
//         description:
//           "Caulk base, dispose of old toilet according to {location} regulations, and clean work area.",
//       },
//     ],
//   },

// ];

// Helper function to get timeline by project slug
// export const getTimelineBySlug = (slug: string): TimelineStep[] => {
//   const costProjectTimeLine = costCalculatorData?.find(
//     (project) => project.slug === slug
//   );
//   return costProjectTimeLine?.timeline?.steps;
//   const projectTimeline = projectTimelines.find(
//     (project) => project.slug === slug
//   );
//   return projectTimeline?.steps || [];
// };

// Helper function to get project timeline with video URL by project slug
// export const getProjectTimelineBySlug = (
//   slug: string
// ): costCalculatorDataItem | undefined => {
//   return costCalculatorData.find((project) => project.slug === slug);
// };

// Helper function to get FAQ by project slug
// export const getFAQBySlug = (slug: string): FAQ[] => {
//   const projectFromCostData = costCalculatorData?.find(
//     (project) => project.slug === slug
//   );
//   if (projectFromCostData?.faq?.faqs) {
//     return projectFromCostData.faq.faqs || [];
//   }
//   const projectFAQ = projectFAQs.find((project) => project.slug === slug);
//   return projectFAQ?.faqs || [];
// };

// Helper function to get permit costs by location
export const getPermitCosts = (location: string): CityPermitCost => {
  return cityPermitCosts[location] || cityPermitCosts["national-average"];
};

// Helper function to format location name from slug
export const formatLocationName = (location: string): string => {
  if (location === "national-average") {
    return "USA";
  }

  // Common state abbreviations that should be all caps
  const stateAbbreviations = new Set([
    "al",
    "ak",
    "az",
    "ar",
    "ca",
    "co",
    "ct",
    "de",
    "fl",
    "ga",
    "hi",
    "id",
    "il",
    "in",
    "ia",
    "ks",
    "ky",
    "la",
    "me",
    "md",
    "ma",
    "mi",
    "mn",
    "ms",
    "mo",
    "mt",
    "ne",
    "nv",
    "nh",
    "nj",
    "nm",
    "ny",
    "nc",
    "nd",
    "oh",
    "ok",
    "or",
    "pa",
    "ri",
    "sc",
    "sd",
    "tn",
    "tx",
    "ut",
    "vt",
    "va",
    "wa",
    "wv",
    "wi",
    "wy",
    "dc", // District of Columbia
  ]);

  return location
    .split("-")
    .map((word) => {
      // If it's a state abbreviation, make it all uppercase
      if (stateAbbreviations.has(word.toLowerCase())) {
        return word.toUpperCase();
      }
      // Otherwise, capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Helper function to get permit cost range text
export const getPermitCostText = (location: string): string => {
  const costs = getPermitCosts(location);
  const locationName = formatLocationName(location);

  if (costs.lowPermitCost === costs.highPermitCost) {
    return `around $${costs.lowPermitCost}`;
  }

  return `$${costs.lowPermitCost}-$${costs.highPermitCost}`;
};
