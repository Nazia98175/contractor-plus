"use client"


import React, { useState, useCallback, useMemo } from 'react';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl/maplibre';
import type { FeatureCollection } from 'geojson';
import type { StyleSpecification } from 'maplibre-gl';

// Define the MaxMind API response structure
interface MaxMindLocation {
  city?: {
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  continent?: {
    code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  country?: {
    iso_code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  location?: {
    accuracy_radius: number;
    latitude: number;
    longitude: number;
    time_zone: string;
  };
  postal?: {
    code: string;
  };
  subdivisions?: Array<{
    iso_code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  }>;
  traits?: {
    autonomous_system_number?: number;
    autonomous_system_organization?: string;
    connection_type?: string;
    isp?: string;
    organization?: string;
    ip_address?: string;
    network?: string;
  };
  maxmind?: {
    queries_remaining: number;
  };
}

interface Props {
  location: MaxMindLocation;
}

// Dark wireframe map style matching the reference image exactly
const WIREFRAME_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet"
    }
  },
  "sprite": "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  "glyphs": "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "rgb(8,8,8)"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": [
        "all",
        ["match", ["geometry-type"], ["MultiPolygon", "Polygon"], true, false]
      ],
      "paint": {
        "fill-color": "rgb(12,12,12)",
        "fill-outline-color": "rgb(25,25,25)"
      }
    },
    {
      "id": "roads_major",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["geometry-type"], ["LineString", "MultiLineString"], true, false],
        ["match", ["get", "class"], ["motorway", "trunk", "primary"], true, false]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgb(120,120,120)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8, 2,
          12, 4,
          16, 8
        ],
        "line-opacity": 0.9
      }
    },
    {
      "id": "roads_secondary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["geometry-type"], ["LineString", "MultiLineString"], true, false],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgb(90,90,90)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8, 1.5,
          12, 3,
          16, 6
        ],
        "line-opacity": 0.8
      }
    },
    {
      "id": "roads_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["geometry-type"], ["LineString", "MultiLineString"], true, false],
        ["match", ["get", "class"], ["minor", "service", "track"], true, false]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgb(70,70,70)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10, 1,
          12, 2,
          16, 4
        ],
        "line-opacity": 0.7
      }
    },
    {
      "id": "roads_residential",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        ["match", ["geometry-type"], ["LineString", "MultiLineString"], true, false],
        ["match", ["get", "class"], ["residential"], true, false]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "rgb(60,60,60)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12, 1,
          16, 3
        ],
        "line-opacity": 0.6
      }
    },
    {
      "id": "building_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "building",
      "minzoom": 14,
      "filter": ["match", ["geometry-type"], ["MultiPolygon", "Polygon"], true, false],
      "paint": {
        "line-color": "rgb(35,35,35)",
        "line-width": 0.5,
        "line-opacity": 0.4
      }
    }
  ]
};



export default function MapComponent({ location }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  // Process location data
  const processedLocation = useMemo(() => {
    const latitude = location.location?.latitude || 28.6139;
    const longitude = location.location?.longitude || 77.2090;
    
    return {
      latitude,
      longitude,
      city: location.city?.names?.en || 'Delhi',
      country: location.country?.names?.en || 'India'
    };
  }, [location]);

  // Generate dynamic user positions around the actual location
  const mockUsers = useMemo(() => {
    const baseUsers = [
      { id: 1, name: "Mike Johnson", initials: "MJ", color: "#FF6B6B" },
      { id: 2, name: "Sarah Wilson", initials: "SW", color: "#4ECDC4" },
      { id: 3, name: "David Brown", initials: "DB", color: "#45B7D1" },
      { id: 4, name: "Lisa Garcia", initials: "LG", color: "#96CEB4" },
      { id: 5, name: "John Smith", initials: "JS", color: "#FFEAA7" },
      { id: 6, name: "Maria Lopez", initials: "ML", color: "#DDA0DD" },
      { id: 7, name: "Robert Davis", initials: "RD", color: "#98D8C8" },
      { id: 8, name: "Jennifer White", initials: "JW", color: "#F7DC6F" },
      { id: 9, name: "Alex Turner", initials: "AT", color: "#BB8FCE" },
      { id: 10, name: "Emma Davis", initials: "ED", color: "#85C1E9" }
    ];

    // Generate positions within a radius around the actual location
    return baseUsers.map((user, index) => {
      // Create a circle of positions around the center
      const angle = (index * 36) + (Math.random() * 20 - 10); // 36 degrees apart with some randomness
      const distance = 0.01 + (Math.random() * 0.015); // 0.01 to 0.025 degrees (~1-3km radius)
      
      const offsetLat = distance * Math.sin(angle * Math.PI / 180);
      const offsetLng = distance * Math.cos(angle * Math.PI / 180);
      
      return {
        ...user,
        lat: processedLocation.latitude + offsetLat,
        lng: processedLocation.longitude + offsetLng
      };
    });
  }, [processedLocation]);

  // Create user pins geojson
  const usersGeojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: mockUsers.map(user => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [user.lng, user.lat]
      },
      properties: {
        id: user.id,
        name: user.name,
        initials: user.initials,
        color: user.color
      }
    }))
  };

  const onMapLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onMapError = useCallback((event: any) => {
    console.error('Map error:', event);
    setIsLoading(false);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden">
      
      {/* Top Label */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-black/60 backdrop-blur-sm text-gray-400 px-3 py-1 rounded-full border border-gray-600 text-sm">
          Field Service Management Software
        </div>
      </div>

      {/* Location Label - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-[rgba(255,255,255,0.3)] backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-gray-600 flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-sm font-medium">{processedLocation.city}, {processedLocation.country}</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 max-w-2xl">
        <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight mb-6">
          One command center to visualize and run your entire field operation
        </h1>
        
        <p className="text-gray-300 text-xl mb-8 leading-relaxed max-w-xl">
          Contractor+ brings job scheduling, dispatch, crew visibility, and communication into one live hub for office & field teams.
        </p>
        
       

        {/* CTA Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
          Get started FREE →
        </button>
      </div>

      {/* Map Container */}
      <div className="absolute inset-0">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white">Loading field operations...</p>
            </div>
          </div>
        )}
        
        <Map
          initialViewState={{
            longitude: processedLocation.longitude,
            latitude: processedLocation.latitude,
            zoom: 13,  // Increased zoom for better road visibility
            pitch: 0,
            bearing: 0
          }}
          style={{ 
            width: '100%', 
            height: '100%',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
          mapStyle={WIREFRAME_STYLE}
          onLoad={onMapLoad}
          onError={onMapError}
          maxZoom={16}
          minZoom={8}
          attributionControl={false}
        >
          <NavigationControl position="bottom-right" showCompass={false} showZoom={true} />
          
          {/* User Profile Pins */}
          {mockUsers.map((user, index) => (
            <div key={user.id}>
              {/* Pin Background Circle */}
              <Source id={`user-bg-${user.id}`} type="geojson" data={{
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [user.lng, user.lat]
                  },
                  properties: {}
                }]
              }}>
                <Layer
                  id={`user-bg-layer-${user.id}`}
                  type="circle"
                  paint={{
                    'circle-radius': 20,
                    'circle-color': '#FFFFFF',
                    'circle-opacity': 0.9,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': user.color,
                    'circle-stroke-opacity': 1
                  }}
                />
              </Source>
              
              {/* Profile Picture Circle */}
              <Source id={`user-profile-${user.id}`} type="geojson" data={{
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [user.lng, user.lat]
                  },
                  properties: {}
                }]
              }}>
                <Layer
                  id={`user-profile-layer-${user.id}`}
                  type="circle"
                  paint={{
                    'circle-radius': 16,
                    'circle-color': user.color,
                    'circle-opacity': 1
                  }}
                />
              </Source>
              
              {/* User Initials */}
              <Source id={`user-text-${user.id}`} type="geojson" data={{
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [user.lng, user.lat]
                  },
                  properties: {
                    initials: user.initials
                  }
                }]
              }}>
                <Layer
                  id={`user-text-layer-${user.id}`}
                  type="symbol"
                  layout={{
                    'text-field': ['get', 'initials'],
                    'text-font': ['Noto Sans Bold'],
                    'text-size': 12,
                    'text-anchor': 'center'
                  }}
                  paint={{
                    'text-color': '#FFFFFF',
                    'text-halo-color': 'rgba(0,0,0,0.3)',
                    'text-halo-width': 1
                  }}
                />
              </Source>
            </div>
          ))}
        </Map>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}









