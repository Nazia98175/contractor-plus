import type { StyleSpecification } from "maplibre-gl";

// Dark wireframe map style from MapComponent
export const WIREFRAME_STYLE: StyleSpecification = {
  version: 8,

  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet",
    },
  },
  sprite: "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "rgb(8,8,8)",
      },
    },
    {
      id: "water",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "water",
      filter: [
        "all",
        ["match", ["geometry-type"], ["MultiPolygon", "Polygon"], true, false],
      ],
      paint: {
        "fill-color": "rgb(12,12,12)",
        "fill-outline-color": "rgb(25,25,25)",
      },
    },
    {
      id: "roads_major",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        [
          "match",
          ["get", "class"],
          ["motorway", "trunk", "primary"],
          true,
          false,
        ],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(120,120,120)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 2, 12, 4, 16, 8],
        "line-opacity": 0.9,
      },
    },
    {
      id: "roads_secondary",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(90,90,90)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          1.5,
          12,
          3,
          16,
          6,
        ],
        "line-opacity": 0.8,
      },
    },
    {
      id: "roads_minor",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["minor", "service", "track"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(70,70,70)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          1,
          12,
          2,
          16,
          4,
        ],
        "line-opacity": 0.7,
      },
    },
    {
      id: "roads_residential",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["residential"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(60,60,60)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1, 16, 3],
        "line-opacity": 0.6,
      },
    },
    {
      id: "building_outline",
      type: "line",
      source: "openmaptiles",
      "source-layer": "building",
      minzoom: 14,
      filter: [
        "match",
        ["geometry-type"],
        ["MultiPolygon", "Polygon"],
        true,
        false,
      ],
      paint: {
        "line-color": "rgb(35,35,35)",
        "line-width": 0.5,
        "line-opacity": 0.4,
      },
    },
    // Road labels for major roads
    {
      id: "road_labels_major",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "transportation_name",
      minzoom: 12,
      filter: [
        "all",
        ["has", "name"],
        ["match", ["get", "class"], ["motorway", "trunk", "primary"], true, false]
      ],
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Noto Sans Regular"],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12, 10,
          16, 14
        ],
        "symbol-placement": "line",
        "text-rotation-alignment": "map",
        "text-pitch-alignment": "viewport",
        "text-max-angle": 30
      },
      paint: {
        "text-color": "rgb(180,180,180)",
        "text-halo-color": "rgba(8,8,8,0.8)",
        "text-halo-width": 1,
        "text-opacity": 0.8
      }
    },
    // Road labels for secondary roads
    {
      id: "road_labels_secondary",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "transportation_name",
      minzoom: 13,
      filter: [
        "all",
        ["has", "name"],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Noto Sans Regular"],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          13, 9,
          16, 12
        ],
        "symbol-placement": "line",
        "text-rotation-alignment": "map",
        "text-pitch-alignment": "viewport",
        "text-max-angle": 30
      },
      paint: {
        "text-color": "rgb(160,160,160)",
        "text-halo-color": "rgba(8,8,8,0.8)",
        "text-halo-width": 1,
        "text-opacity": 0.7
      }
    },
    // Area/place labels (neighborhoods, districts)
    {
      id: "place_labels",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "place",
      minzoom: 10,
      filter: [
        "all",
        ["has", "name"],
        ["match", ["get", "class"], ["neighbourhood", "suburb", "quarter"], true, false]
      ],
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Noto Sans Bold"],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10, 11,
          14, 16
        ],
        "text-anchor": "center",
        "text-max-width": 8,
        "text-letter-spacing": 0.1
      },
      paint: {
        "text-color": "rgb(200,200,200)",
        "text-halo-color": "rgba(8,8,8,0.9)",
        "text-halo-width": 2,
        "text-opacity": 0.9
      }
    },
    // City/town labels
    {
      id: "city_labels",
      type: "symbol",
      source: "openmaptiles",
      "source-layer": "place",
      minzoom: 8,
      filter: [
        "all",
        ["has", "name"],
        ["match", ["get", "class"], ["city", "town"], true, false]
      ],
      layout: {
        "text-field": ["get", "name"],
        "text-font": ["Noto Sans Bold"],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8, 12,
          12, 18
        ],
        "text-anchor": "center",
        "text-max-width": 8,
        "text-letter-spacing": 0.15
      },
      paint: {
        "text-color": "rgb(220,220,220)",
        "text-halo-color": "rgba(8,8,8,0.9)",
        "text-halo-width": 2,
        "text-opacity": 1
      }
    },
  ],
};