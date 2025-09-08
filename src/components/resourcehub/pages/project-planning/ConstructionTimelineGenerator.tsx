"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import {
  Calendar,
  Home,
  Clock,
  Edit3,
  Save,
  Mail,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Trash2,
  Plus,
  GripVertical,
} from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import Link from "next/link";

interface ProjectPhase {
  id: string;
  name: string;
  duration: number;
  startDay: number;
  endDay: number;
  dependencies?: string[];
  editable?: boolean;
}

interface ProjectData {
  projectName: string;
  projectCategory: string;
  projectType: string;
  projectSize: string;
  permitRequired: string;
  complexity: string;
  customPhases?: ProjectPhase[];
}

const projectTypes = {
  residential: [
    { value: "single-family-home", label: "Single Family Home" },
    { value: "townhouse", label: "Townhouse" },
    { value: "condo-renovation", label: "Condo Renovation" },
    { value: "kitchen-remodel", label: "Kitchen Remodel" },
    { value: "bathroom-remodel", label: "Bathroom Remodel" },
    { value: "basement-finish", label: "Basement Finish" },
    { value: "home-addition", label: "Home Addition" },
    { value: "deck-patio", label: "Deck/Patio Construction" },
    { value: "garage-construction", label: "Garage Construction" },
    { value: "whole-house-renovation", label: "Whole House Renovation" },
  ],
  commercial: [
    { value: "office-building", label: "Office Building" },
    { value: "retail-store", label: "Retail Store" },
    { value: "restaurant", label: "Restaurant" },
    { value: "warehouse", label: "Warehouse" },
    { value: "medical-office", label: "Medical Office" },
    { value: "tenant-improvement", label: "Tenant Improvement" },
    { value: "hotel", label: "Hotel" },
    { value: "manufacturing-facility", label: "Manufacturing Facility" },
    { value: "shopping-center", label: "Shopping Center" },
    { value: "mixed-use-development", label: "Mixed-Use Development" },
  ],
};

const projectPhases: Record<string, ProjectPhase[]> = {
  "single-family-home": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 14,
      startDay: 0,
      endDay: 14,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 5,
      startDay: 14,
      endDay: 19,
    },
    {
      id: "foundation",
      name: "Foundation",
      duration: 10,
      startDay: 19,
      endDay: 29,
    },
    { id: "framing", name: "Framing", duration: 12, startDay: 29, endDay: 41 },
    { id: "roofing", name: "Roofing", duration: 5, startDay: 41, endDay: 46 },
    {
      id: "exterior-siding",
      name: "Exterior Siding",
      duration: 7,
      startDay: 46,
      endDay: 53,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 10,
      startDay: 53,
      endDay: 63,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 3,
      startDay: 63,
      endDay: 66,
    },
    { id: "drywall", name: "Drywall", duration: 8, startDay: 66, endDay: 74 },
    { id: "flooring", name: "Flooring", duration: 7, startDay: 74, endDay: 81 },
    {
      id: "interior-trim",
      name: "Interior Trim",
      duration: 6,
      startDay: 81,
      endDay: 87,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 5,
      startDay: 87,
      endDay: 92,
    },
    {
      id: "paint",
      name: "Paint & Finish",
      duration: 5,
      startDay: 92,
      endDay: 97,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 97,
      endDay: 99,
    },
  ],
  townhouse: [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 12,
      startDay: 0,
      endDay: 12,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 3,
      startDay: 12,
      endDay: 15,
    },
    {
      id: "foundation",
      name: "Foundation",
      duration: 8,
      startDay: 15,
      endDay: 23,
    },
    { id: "framing", name: "Framing", duration: 10, startDay: 23, endDay: 33 },
    { id: "roofing", name: "Roofing", duration: 4, startDay: 33, endDay: 37 },
    {
      id: "exterior",
      name: "Exterior Work",
      duration: 6,
      startDay: 37,
      endDay: 43,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 8,
      startDay: 43,
      endDay: 51,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 2,
      startDay: 51,
      endDay: 53,
    },
    { id: "drywall", name: "Drywall", duration: 6, startDay: 53, endDay: 59 },
    {
      id: "finishes",
      name: "Interior Finishes",
      duration: 12,
      startDay: 59,
      endDay: 71,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 71,
      endDay: 73,
    },
  ],
  "condo-renovation": [
    {
      id: "permits",
      name: "Permits & Board Approval",
      duration: 10,
      startDay: 0,
      endDay: 10,
    },
    { id: "demo", name: "Demolition", duration: 3, startDay: 10, endDay: 13 },
    {
      id: "structural",
      name: "Structural Changes",
      duration: 4,
      startDay: 13,
      endDay: 17,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 5,
      startDay: 17,
      endDay: 22,
    },
    { id: "drywall", name: "Drywall", duration: 4, startDay: 22, endDay: 26 },
    { id: "flooring", name: "Flooring", duration: 4, startDay: 26, endDay: 30 },
    {
      id: "kitchen-bath",
      name: "Kitchen & Bath",
      duration: 8,
      startDay: 30,
      endDay: 38,
    },
    {
      id: "paint-finishes",
      name: "Paint & Finishes",
      duration: 4,
      startDay: 38,
      endDay: 42,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 42,
      endDay: 43,
    },
  ],
  "kitchen-remodel": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 7,
      startDay: 0,
      endDay: 7,
    },
    { id: "demo", name: "Demolition", duration: 2, startDay: 7, endDay: 9 },
    {
      id: "structural",
      name: "Structural Changes",
      duration: 3,
      startDay: 9,
      endDay: 12,
    },
    {
      id: "plumbing",
      name: "Plumbing Rough-in",
      duration: 2,
      startDay: 12,
      endDay: 14,
    },
    {
      id: "electrical",
      name: "Electrical Rough-in",
      duration: 2,
      startDay: 14,
      endDay: 16,
    },
    { id: "drywall", name: "Drywall", duration: 3, startDay: 16, endDay: 19 },
    { id: "flooring", name: "Flooring", duration: 3, startDay: 19, endDay: 22 },
    {
      id: "cabinets",
      name: "Cabinet Installation",
      duration: 4,
      startDay: 22,
      endDay: 26,
    },
    {
      id: "countertops",
      name: "Countertops",
      duration: 2,
      startDay: 26,
      endDay: 28,
    },
    {
      id: "backsplash",
      name: "Backsplash",
      duration: 2,
      startDay: 28,
      endDay: 30,
    },
    {
      id: "appliances",
      name: "Appliance Installation",
      duration: 1,
      startDay: 30,
      endDay: 31,
    },
    {
      id: "final",
      name: "Final Touches",
      duration: 2,
      startDay: 31,
      endDay: 33,
    },
  ],
  "bathroom-remodel": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 5,
      startDay: 0,
      endDay: 5,
    },
    { id: "demo", name: "Demolition", duration: 2, startDay: 5, endDay: 7 },
    {
      id: "plumbing",
      name: "Plumbing Rough-in",
      duration: 3,
      startDay: 7,
      endDay: 10,
    },
    {
      id: "electrical",
      name: "Electrical Rough-in",
      duration: 2,
      startDay: 10,
      endDay: 12,
    },
    {
      id: "waterproofing",
      name: "Waterproofing",
      duration: 2,
      startDay: 12,
      endDay: 14,
    },
    {
      id: "tile-work",
      name: "Tile Work",
      duration: 5,
      startDay: 14,
      endDay: 19,
    },
    {
      id: "vanity",
      name: "Vanity Installation",
      duration: 2,
      startDay: 19,
      endDay: 21,
    },
    {
      id: "fixtures",
      name: "Plumbing Fixtures",
      duration: 2,
      startDay: 21,
      endDay: 23,
    },
    {
      id: "paint-finishes",
      name: "Paint & Finishes",
      duration: 2,
      startDay: 23,
      endDay: 25,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 25,
      endDay: 26,
    },
  ],
  "basement-finish": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 8,
      startDay: 0,
      endDay: 8,
    },
    {
      id: "waterproofing",
      name: "Waterproofing",
      duration: 3,
      startDay: 8,
      endDay: 11,
    },
    { id: "framing", name: "Framing", duration: 5, startDay: 11, endDay: 16 },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 6,
      startDay: 16,
      endDay: 22,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 2,
      startDay: 22,
      endDay: 24,
    },
    { id: "drywall", name: "Drywall", duration: 5, startDay: 24, endDay: 29 },
    { id: "flooring", name: "Flooring", duration: 4, startDay: 29, endDay: 33 },
    {
      id: "trim-doors",
      name: "Trim & Doors",
      duration: 3,
      startDay: 33,
      endDay: 36,
    },
    { id: "paint", name: "Paint", duration: 3, startDay: 36, endDay: 39 },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 39,
      endDay: 40,
    },
  ],
  "home-addition": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 12,
      startDay: 0,
      endDay: 12,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 3,
      startDay: 12,
      endDay: 15,
    },
    {
      id: "foundation",
      name: "Foundation",
      duration: 8,
      startDay: 15,
      endDay: 23,
    },
    { id: "framing", name: "Framing", duration: 8, startDay: 23, endDay: 31 },
    { id: "roofing", name: "Roofing", duration: 4, startDay: 31, endDay: 35 },
    {
      id: "exterior",
      name: "Exterior Work",
      duration: 5,
      startDay: 35,
      endDay: 40,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 6,
      startDay: 40,
      endDay: 46,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 2,
      startDay: 46,
      endDay: 48,
    },
    { id: "drywall", name: "Drywall", duration: 5, startDay: 48, endDay: 53 },
    {
      id: "finishes",
      name: "Interior Finishes",
      duration: 8,
      startDay: 53,
      endDay: 61,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 61,
      endDay: 63,
    },
  ],
  "deck-patio": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 5,
      startDay: 0,
      endDay: 5,
    },
    {
      id: "site-prep",
      name: "Site Preparation",
      duration: 2,
      startDay: 5,
      endDay: 7,
    },
    {
      id: "excavation",
      name: "Excavation & Grading",
      duration: 2,
      startDay: 7,
      endDay: 9,
    },
    {
      id: "foundation-footings",
      name: "Footings/Foundation",
      duration: 3,
      startDay: 9,
      endDay: 12,
    },
    {
      id: "structural-frame",
      name: "Deck Structure/Frame",
      duration: 4,
      startDay: 12,
      endDay: 16,
    },
    {
      id: "decking-surface",
      name: "Decking Surface",
      duration: 3,
      startDay: 16,
      endDay: 19,
    },
    {
      id: "railings",
      name: "Railings & Balusters",
      duration: 2,
      startDay: 19,
      endDay: 21,
    },
    {
      id: "stairs",
      name: "Stairs & Steps",
      duration: 2,
      startDay: 21,
      endDay: 23,
    },
    {
      id: "staining-sealing",
      name: "Staining/Sealing",
      duration: 2,
      startDay: 23,
      endDay: 25,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 25,
      endDay: 26,
    },
  ],
  "garage-construction": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 8,
      startDay: 0,
      endDay: 8,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 2,
      startDay: 8,
      endDay: 10,
    },
    {
      id: "foundation",
      name: "Foundation & Slab",
      duration: 5,
      startDay: 10,
      endDay: 15,
    },
    { id: "framing", name: "Framing", duration: 6, startDay: 15, endDay: 21 },
    { id: "roofing", name: "Roofing", duration: 3, startDay: 21, endDay: 24 },
    { id: "siding", name: "Siding", duration: 4, startDay: 24, endDay: 28 },
    {
      id: "electrical",
      name: "Electrical",
      duration: 3,
      startDay: 28,
      endDay: 31,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 1,
      startDay: 31,
      endDay: 32,
    },
    { id: "drywall", name: "Drywall", duration: 3, startDay: 32, endDay: 35 },
    {
      id: "garage-door",
      name: "Garage Door",
      duration: 1,
      startDay: 35,
      endDay: 36,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 36,
      endDay: 37,
    },
  ],
  "whole-house-renovation": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 21,
      startDay: 0,
      endDay: 21,
    },
    { id: "demo", name: "Demolition", duration: 7, startDay: 21, endDay: 28 },
    {
      id: "structural",
      name: "Structural Changes",
      duration: 10,
      startDay: 28,
      endDay: 38,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 15,
      startDay: 38,
      endDay: 53,
    },
    {
      id: "insulation",
      name: "Insulation",
      duration: 5,
      startDay: 53,
      endDay: 58,
    },
    { id: "drywall", name: "Drywall", duration: 12, startDay: 58, endDay: 70 },
    {
      id: "flooring",
      name: "Flooring",
      duration: 10,
      startDay: 70,
      endDay: 80,
    },
    {
      id: "kitchen",
      name: "Kitchen Renovation",
      duration: 12,
      startDay: 80,
      endDay: 92,
    },
    {
      id: "bathrooms",
      name: "Bathroom Renovations",
      duration: 15,
      startDay: 92,
      endDay: 107,
    },
    {
      id: "paint-finishes",
      name: "Paint & Finishes",
      duration: 8,
      startDay: 107,
      endDay: 115,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 3,
      startDay: 115,
      endDay: 118,
    },
  ],
  "office-building": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 21,
      startDay: 0,
      endDay: 21,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 14,
      startDay: 21,
      endDay: 35,
    },
    {
      id: "foundation",
      name: "Foundation",
      duration: 20,
      startDay: 35,
      endDay: 55,
    },
    {
      id: "structure",
      name: "Steel/Concrete Structure",
      duration: 35,
      startDay: 55,
      endDay: 90,
    },
    {
      id: "envelope",
      name: "Building Envelope",
      duration: 25,
      startDay: 90,
      endDay: 115,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 30,
      startDay: 115,
      endDay: 145,
    },
    {
      id: "elevator",
      name: "Elevator Installation",
      duration: 15,
      startDay: 145,
      endDay: 160,
    },
    {
      id: "interior-framing",
      name: "Interior Framing",
      duration: 20,
      startDay: 160,
      endDay: 180,
    },
    {
      id: "fire-safety",
      name: "Fire Safety Systems",
      duration: 10,
      startDay: 180,
      endDay: 190,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 25,
      startDay: 190,
      endDay: 215,
    },
    {
      id: "finishes",
      name: "Interior Finishes",
      duration: 30,
      startDay: 215,
      endDay: 245,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 5,
      startDay: 245,
      endDay: 250,
    },
  ],
  "retail-store": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 10,
      startDay: 0,
      endDay: 10,
    },
    { id: "demo", name: "Demolition", duration: 3, startDay: 10, endDay: 13 },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 8,
      startDay: 13,
      endDay: 21,
    },
    {
      id: "storefront",
      name: "Storefront Installation",
      duration: 5,
      startDay: 21,
      endDay: 26,
    },
    { id: "flooring", name: "Flooring", duration: 4, startDay: 26, endDay: 30 },
    {
      id: "millwork",
      name: "Millwork & Fixtures",
      duration: 8,
      startDay: 30,
      endDay: 38,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 5,
      startDay: 38,
      endDay: 43,
    },
    {
      id: "paint-finishes",
      name: "Paint & Finishes",
      duration: 4,
      startDay: 43,
      endDay: 47,
    },
    {
      id: "signage",
      name: "Signage Installation",
      duration: 2,
      startDay: 47,
      endDay: 49,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 49,
      endDay: 51,
    },
  ],
  restaurant: [
    {
      id: "permits",
      name: "Permits & Health Dept",
      duration: 14,
      startDay: 0,
      endDay: 14,
    },
    { id: "demo", name: "Demolition", duration: 3, startDay: 14, endDay: 17 },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 8,
      startDay: 17,
      endDay: 25,
    },
    {
      id: "kitchen-ventilation",
      name: "Kitchen Ventilation",
      duration: 5,
      startDay: 25,
      endDay: 30,
    },
    { id: "flooring", name: "Flooring", duration: 4, startDay: 30, endDay: 34 },
    {
      id: "kitchen-equipment",
      name: "Kitchen Equipment",
      duration: 6,
      startDay: 34,
      endDay: 40,
    },
    {
      id: "bar-setup",
      name: "Bar Setup",
      duration: 3,
      startDay: 40,
      endDay: 43,
    },
    {
      id: "dining-area",
      name: "Dining Area Finishes",
      duration: 5,
      startDay: 43,
      endDay: 48,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 4,
      startDay: 48,
      endDay: 52,
    },
    {
      id: "paint-finishes",
      name: "Paint & Final Finishes",
      duration: 3,
      startDay: 52,
      endDay: 55,
    },
    {
      id: "health-inspection",
      name: "Health Inspection",
      duration: 2,
      startDay: 55,
      endDay: 57,
    },
  ],
  warehouse: [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 15,
      startDay: 0,
      endDay: 15,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 10,
      startDay: 15,
      endDay: 25,
    },
    {
      id: "foundation",
      name: "Foundation & Slab",
      duration: 15,
      startDay: 25,
      endDay: 40,
    },
    {
      id: "structure",
      name: "Steel Structure",
      duration: 20,
      startDay: 40,
      endDay: 60,
    },
    {
      id: "roofing",
      name: "Roofing System",
      duration: 10,
      startDay: 60,
      endDay: 70,
    },
    {
      id: "siding",
      name: "Metal Siding",
      duration: 8,
      startDay: 70,
      endDay: 78,
    },
    {
      id: "dock-doors",
      name: "Loading Dock & Doors",
      duration: 5,
      startDay: 78,
      endDay: 83,
    },
    {
      id: "electrical",
      name: "Electrical Systems",
      duration: 8,
      startDay: 83,
      endDay: 91,
    },
    {
      id: "fire-safety",
      name: "Fire Safety Systems",
      duration: 5,
      startDay: 91,
      endDay: 96,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 96,
      endDay: 98,
    },
  ],
  "medical-office": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 12,
      startDay: 0,
      endDay: 12,
    },
    { id: "demo", name: "Demolition", duration: 3, startDay: 12, endDay: 15 },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 10,
      startDay: 15,
      endDay: 25,
    },
    {
      id: "medical-gas",
      name: "Medical Gas Systems",
      duration: 3,
      startDay: 25,
      endDay: 28,
    },
    {
      id: "x-ray-shielding",
      name: "X-Ray Room Shielding",
      duration: 4,
      startDay: 28,
      endDay: 32,
    },
    {
      id: "flooring",
      name: "Medical Grade Flooring",
      duration: 5,
      startDay: 32,
      endDay: 37,
    },
    {
      id: "cabinetry",
      name: "Medical Cabinetry",
      duration: 6,
      startDay: 37,
      endDay: 43,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 6,
      startDay: 43,
      endDay: 49,
    },
    {
      id: "equipment",
      name: "Medical Equipment",
      duration: 4,
      startDay: 49,
      endDay: 53,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 2,
      startDay: 53,
      endDay: 55,
    },
  ],
  "tenant-improvement": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 8,
      startDay: 0,
      endDay: 8,
    },
    { id: "demo", name: "Demolition", duration: 2, startDay: 8, endDay: 10 },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 6,
      startDay: 10,
      endDay: 16,
    },
    {
      id: "framing",
      name: "Interior Framing",
      duration: 4,
      startDay: 16,
      endDay: 20,
    },
    { id: "drywall", name: "Drywall", duration: 4, startDay: 20, endDay: 24 },
    { id: "flooring", name: "Flooring", duration: 3, startDay: 24, endDay: 27 },
    {
      id: "millwork",
      name: "Millwork & Fixtures",
      duration: 5,
      startDay: 27,
      endDay: 32,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 4,
      startDay: 32,
      endDay: 36,
    },
    {
      id: "paint-finishes",
      name: "Paint & Finishes",
      duration: 3,
      startDay: 36,
      endDay: 39,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 1,
      startDay: 39,
      endDay: 40,
    },
  ],
  hotel: [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 30,
      startDay: 0,
      endDay: 30,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 20,
      startDay: 30,
      endDay: 50,
    },
    {
      id: "foundation",
      name: "Foundation",
      duration: 25,
      startDay: 50,
      endDay: 75,
    },
    {
      id: "structure",
      name: "Building Structure",
      duration: 45,
      startDay: 75,
      endDay: 120,
    },
    {
      id: "envelope",
      name: "Building Envelope",
      duration: 30,
      startDay: 120,
      endDay: 150,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 40,
      startDay: 150,
      endDay: 190,
    },
    {
      id: "elevator",
      name: "Elevator Installation",
      duration: 20,
      startDay: 190,
      endDay: 210,
    },
    {
      id: "guestrooms",
      name: "Guest Room Build-out",
      duration: 35,
      startDay: 210,
      endDay: 245,
    },
    {
      id: "common-areas",
      name: "Common Area Finishes",
      duration: 25,
      startDay: 245,
      endDay: 270,
    },
    {
      id: "kitchen-restaurant",
      name: "Kitchen & Restaurant",
      duration: 20,
      startDay: 270,
      endDay: 290,
    },
    {
      id: "mep-finish",
      name: "MEP Finish",
      duration: 15,
      startDay: 290,
      endDay: 305,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 5,
      startDay: 305,
      endDay: 310,
    },
  ],
  "manufacturing-facility": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 25,
      startDay: 0,
      endDay: 25,
    },
    {
      id: "sitework",
      name: "Site Preparation",
      duration: 15,
      startDay: 25,
      endDay: 40,
    },
    {
      id: "foundation",
      name: "Foundation & Slab",
      duration: 20,
      startDay: 40,
      endDay: 60,
    },
    {
      id: "structure",
      name: "Steel Structure",
      duration: 30,
      startDay: 60,
      endDay: 90,
    },
    {
      id: "crane-systems",
      name: "Crane Systems",
      duration: 10,
      startDay: 90,
      endDay: 100,
    },
    {
      id: "roofing",
      name: "Roofing System",
      duration: 12,
      startDay: 100,
      endDay: 112,
    },
    {
      id: "siding",
      name: "Metal Siding",
      duration: 10,
      startDay: 112,
      endDay: 122,
    },
    {
      id: "utilities",
      name: "Utility Systems",
      duration: 15,
      startDay: 122,
      endDay: 137,
    },
    {
      id: "equipment-install",
      name: "Equipment Installation",
      duration: 20,
      startDay: 137,
      endDay: 157,
    },
    {
      id: "testing",
      name: "Testing & Commissioning",
      duration: 8,
      startDay: 157,
      endDay: 165,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 3,
      startDay: 165,
      endDay: 168,
    },
  ],
  "shopping-center": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 35,
      startDay: 0,
      endDay: 35,
    },
    {
      id: "sitework",
      name: "Site Development",
      duration: 25,
      startDay: 35,
      endDay: 60,
    },
    {
      id: "foundation",
      name: "Foundation Work",
      duration: 20,
      startDay: 60,
      endDay: 80,
    },
    {
      id: "structure",
      name: "Building Structure",
      duration: 40,
      startDay: 80,
      endDay: 120,
    },
    {
      id: "envelope",
      name: "Building Envelope",
      duration: 25,
      startDay: 120,
      endDay: 145,
    },
    {
      id: "anchor-tenant",
      name: "Anchor Tenant Build-out",
      duration: 30,
      startDay: 145,
      endDay: 175,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 25,
      startDay: 175,
      endDay: 200,
    },
    {
      id: "individual-stores",
      name: "Individual Store Build-outs",
      duration: 35,
      startDay: 200,
      endDay: 235,
    },
    {
      id: "common-areas",
      name: "Common Area Finishes",
      duration: 20,
      startDay: 235,
      endDay: 255,
    },
    {
      id: "parking-landscaping",
      name: "Parking & Landscaping",
      duration: 15,
      startDay: 255,
      endDay: 270,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 5,
      startDay: 270,
      endDay: 275,
    },
  ],
  "mixed-use-development": [
    {
      id: "permits",
      name: "Permits & Planning",
      duration: 45,
      startDay: 0,
      endDay: 45,
    },
    {
      id: "sitework",
      name: "Site Development",
      duration: 30,
      startDay: 45,
      endDay: 75,
    },
    {
      id: "foundation",
      name: "Foundation Systems",
      duration: 25,
      startDay: 75,
      endDay: 100,
    },
    {
      id: "structure",
      name: "Building Structure",
      duration: 60,
      startDay: 100,
      endDay: 160,
    },
    {
      id: "envelope",
      name: "Building Envelope",
      duration: 35,
      startDay: 160,
      endDay: 195,
    },
    {
      id: "mep-rough",
      name: "MEP Rough-in",
      duration: 40,
      startDay: 195,
      endDay: 235,
    },
    {
      id: "residential-units",
      name: "Residential Unit Build-out",
      duration: 45,
      startDay: 235,
      endDay: 280,
    },
    {
      id: "commercial-spaces",
      name: "Commercial Space Build-out",
      duration: 30,
      startDay: 280,
      endDay: 310,
    },
    {
      id: "common-areas",
      name: "Common Areas & Amenities",
      duration: 25,
      startDay: 310,
      endDay: 335,
    },
    {
      id: "landscaping",
      name: "Landscaping & Site Work",
      duration: 15,
      startDay: 335,
      endDay: 350,
    },
    {
      id: "final",
      name: "Final Inspection",
      duration: 5,
      startDay: 350,
      endDay: 355,
    },
  ],
};

export default function ConstructionTimelineGenerator() {
  const [projectData, setProjectData] = useState<ProjectData>({
    projectName: "",
    projectCategory: "",
    projectType: "",
    projectSize: "",
    permitRequired: "",
    complexity: "",
  });
  const [timeline, setTimeline] = useState<ProjectPhase[]>([]);
  const [editingPhase, setEditingPhase] = useState<string | null>(null);
  const [editDuration, setEditDuration] = useState<number>(0);
  const [showAddPhaseDialog, setShowAddPhaseDialog] = useState(false);
  const [newPhaseName, setNewPhaseName] = useState("");
  const [newPhaseDuration, setNewPhaseDuration] = useState(1);
  const { toast } = useToast();

  useMetaTags({
    title: "Construction Timeline Generator - Free Gantt Chart Tool",
    description:
      "Create professional construction project timelines with our free Gantt chart generator. Customize phases, durations, and export PDFs for client sharing.",
    keywords:
      "construction timeline, gantt chart, project schedule, construction planning, timeline generator, project management",
  });

  const generateTimeline = () => {
    if (!projectData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please select a project type to generate the timeline.",
        variant: "destructive",
      });
      return;
    }

    let basePhases = [
      ...(projectPhases[projectData.projectType] ||
        projectPhases["single-family-home"]),
    ];

    // Filter out permits phase if not required
    if (projectData.permitRequired === "no") {
      basePhases = basePhases.filter((phase) => phase.id !== "permits");
    }

    // Apply complexity multiplier
    const complexityMultiplier =
      projectData.complexity === "high"
        ? 1.4
        : projectData.complexity === "low"
          ? 0.7
          : 1.0;

    // Apply permit delay only if permits are required
    const permitDelay = projectData.permitRequired === "yes" ? 7 : 0;

    // Adjust durations and recalculate timeline
    let currentStartDay = permitDelay;
    basePhases = basePhases.map((phase) => {
      const adjustedDuration = Math.ceil(phase.duration * complexityMultiplier);
      const adjustedPhase = {
        ...phase,
        duration: adjustedDuration,
        startDay: currentStartDay,
        endDay: currentStartDay + adjustedDuration,
        editable: true,
      };
      currentStartDay += adjustedDuration;
      return adjustedPhase;
    });

    setTimeline(basePhases);
    toast({
      title: "Timeline Generated",
      description: "Your construction timeline has been created successfully!",
    });
  };

  const recalculateTimeline = (phases: ProjectPhase[]) => {
    let currentDay = 0;
    return phases.map((phase) => {
      const adjustedPhase = {
        ...phase,
        startDay: currentDay,
        endDay: currentDay + phase.duration,
      };
      currentDay += phase.duration;
      return adjustedPhase;
    });
  };

  const updatePhase = (phaseId: string, newDuration: number) => {
    const updatedTimeline = timeline.map((phase) =>
      phase.id === phaseId ? { ...phase, duration: newDuration } : phase,
    );

    const recalculatedTimeline = recalculateTimeline(updatedTimeline);
    setTimeline(recalculatedTimeline);
    setEditingPhase(null);

    toast({
      title: "Phase Updated",
      description: "Timeline has been recalculated with the new duration.",
    });
  };

  const deletePhase = (phaseId: string) => {
    const updatedTimeline = timeline.filter((phase) => phase.id !== phaseId);
    const recalculatedTimeline = recalculateTimeline(updatedTimeline);
    setTimeline(recalculatedTimeline);
    toast({
      title: "Phase Deleted",
      description: "Timeline has been updated.",
    });
  };

  const addCustomPhase = () => {
    if (!newPhaseName.trim()) {
      toast({
        title: "Invalid Phase Name",
        description: "Please enter a valid phase name.",
        variant: "destructive",
      });
      return;
    }

    const newPhase: ProjectPhase = {
      id: `custom-${Date.now()}`,
      name: newPhaseName,
      duration: newPhaseDuration,
      startDay: 0,
      endDay: newPhaseDuration,
      editable: true,
    };

    const updatedTimeline = [...timeline, newPhase];
    const recalculatedTimeline = recalculateTimeline(updatedTimeline);
    setTimeline(recalculatedTimeline);

    setNewPhaseName("");
    setNewPhaseDuration(1);
    setShowAddPhaseDialog(false);

    toast({
      title: "Phase Added",
      description: "New phase has been added to your timeline.",
    });
  };

  const handlePhaseReorder = (startIndex: number, endIndex: number) => {
    const items = Array.from(timeline);
    const [reorderedItem] = items.splice(startIndex, 1);
    items.splice(endIndex, 0, reorderedItem);

    const recalculatedTimeline = recalculateTimeline(items);
    setTimeline(recalculatedTimeline);

    toast({
      title: "Phases Reordered",
      description: "Timeline has been updated with the new phase order.",
    });
  };

  const movePhaseUp = (index: number) => {
    if (index > 0) {
      handlePhaseReorder(index, index - 1);
    }
  };

  const movePhaseDown = (index: number) => {
    if (index < timeline.length - 1) {
      handlePhaseReorder(index, index + 1);
    }
  };

  const availableProjectTypes = projectData.projectCategory
    ? projectTypes[projectData.projectCategory as keyof typeof projectTypes] ||
      []
    : [];

  const exportPDF = () => {
    try {
      const doc = new jsPDF("landscape", "mm", "a4");

      // Page dimensions
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;

      // Header
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      const title = projectData.projectName || "Construction Timeline";
      doc.text(title, margin, margin + 10);

      // Project details
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      let yPos = margin + 25;

      if (projectData.projectType) {
        const projectTypeLabel =
          availableProjectTypes.find(
            (pt) => pt.value === projectData.projectType,
          )?.label || projectData.projectType;
        doc.text(`Project Type: ${projectTypeLabel}`, margin, yPos);
        yPos += 5;
      }

      if (projectData.complexity) {
        doc.text(
          `Complexity: ${projectData.complexity.charAt(0).toUpperCase() + projectData.complexity.slice(1)}`,
          margin,
          yPos,
        );
        yPos += 5;
      }

      const totalDuration =
        timeline.length > 0 ? Math.max(...timeline.map((p) => p.endDay)) : 0;
      doc.text(`Total Duration: ${totalDuration} days`, margin, yPos);
      yPos += 15;

      // Timeline header
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Project Timeline", margin, yPos);
      yPos += 10;

      // Timeline phases table
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");

      // Table headers
      const colWidths = [80, 25, 25, 25, usableWidth - 155];
      const headers = ["Phase", "Duration", "Start Day", "End Day", "Timeline"];

      doc.setFont("helvetica", "bold");
      let xPos = margin;
      headers.forEach((header, i) => {
        doc.text(header, xPos, yPos);
        xPos += colWidths[i];
      });
      yPos += 7;

      // Table content
      doc.setFont("helvetica", "normal");
      timeline.forEach((phase, index) => {
        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = margin + 10;
        }

        xPos = margin;

        // Phase name
        doc.text(phase.name, xPos, yPos);
        xPos += colWidths[0];

        // Duration
        doc.text(`${phase.duration}`, xPos, yPos);
        xPos += colWidths[1];

        // Start day
        doc.text(`${phase.startDay}`, xPos, yPos);
        xPos += colWidths[2];

        // End day
        doc.text(`${phase.endDay}`, xPos, yPos);
        xPos += colWidths[3];

        // Gantt bar
        if (totalDuration > 0) {
          const barWidth = colWidths[4] - 10;
          const barHeight = 4;
          const barX = xPos + 2;
          const barY = yPos - 2;

          // Background bar
          doc.setFillColor(230, 230, 230);
          doc.rect(barX, barY, barWidth, barHeight, "F");

          // Progress bar
          const progressWidth = (phase.duration / totalDuration) * barWidth;
          const progressX = barX + (phase.startDay / totalDuration) * barWidth;

          // Use different colors for different phase types
          const colors = [
            [41, 128, 185], // Blue
            [46, 204, 113], // Green
            [155, 89, 182], // Purple
            [231, 76, 60], // Red
            [243, 156, 18], // Orange
          ];
          const color = colors[index % colors.length];
          doc.setFillColor(color[0], color[1], color[2]);
          doc.rect(progressX, barY, progressWidth, barHeight, "F");
        }

        yPos += 10;
      });

      // Footer
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      const footerText = "Generated by Contractor+ Timeline Generator";
      const footerWidth = doc.getTextWidth(footerText);
      doc.text(footerText, pageWidth - footerWidth - margin, pageHeight - 10);

      // Save the PDF
      const fileName = `${projectData.projectName || "construction-timeline"}.pdf`;
      doc.save(fileName);

      toast({
        title: "PDF Downloaded",
        description: "Your timeline has been saved as a PDF file.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const totalDuration =
    timeline.length > 0 ? Math.max(...timeline.map((p) => p.endDay)) : 0;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/resources" className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/resources/project-planning-tools">
                  Project Planning
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Timeline Generator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Construction Timeline Generator
        </h1>
        <p className="text-decemberSky mx-auto max-w-2xl text-lg">
          Create professional construction project timelines with customizable
          Gantt-style visualization
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Fill out your project information to generate a timeline
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  id="projectName"
                  tabIndex={1}
                  value={projectData.projectName}
                  onChange={(e) =>
                    setProjectData((prev) => ({
                      ...prev,
                      projectName: e.target.value,
                    }))
                  }
                  placeholder="Enter project name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="projectCategory">Project Category</Label>
                <Select
                  value={projectData.projectCategory}
                  onValueChange={(value) =>
                    setProjectData((prev) => ({
                      ...prev,
                      projectCategory: value,
                      projectType: "", // Reset project type when category changes
                    }))
                  }
                >
                  <SelectTrigger tabIndex={2}>
                    <SelectValue placeholder="Select project category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  value={projectData.projectType}
                  onValueChange={(value) =>
                    setProjectData((prev) => ({ ...prev, projectType: value }))
                  }
                  disabled={!projectData.projectCategory}
                >
                  <SelectTrigger tabIndex={3}>
                    <SelectValue
                      placeholder={
                        projectData.projectCategory
                          ? "Select project type"
                          : "Select category first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProjectTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="complexity">Project Complexity</Label>
                <Select
                  value={projectData.complexity}
                  onValueChange={(value) =>
                    setProjectData((prev) => ({ ...prev, complexity: value }))
                  }
                >
                  <SelectTrigger tabIndex={4}>
                    <SelectValue placeholder="Select complexity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="permitRequired">Permits Required?</Label>
                <Select
                  value={projectData.permitRequired}
                  onValueChange={(value) =>
                    setProjectData((prev) => ({
                      ...prev,
                      permitRequired: value,
                    }))
                  }
                >
                  <SelectTrigger tabIndex={5}>
                    <SelectValue placeholder="Permits needed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={generateTimeline}
                className="mt-6 w-full"
                tabIndex={6}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Generate Timeline
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Display */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Project Timeline</CardTitle>
                  <CardDescription>
                    {timeline.length > 0 && (
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Total Duration: {totalDuration} days
                      </span>
                    )}
                  </CardDescription>
                </div>
                {timeline.length > 0 && (
                  <div className="flex gap-2">
                    <Dialog
                      open={showAddPhaseDialog}
                      onOpenChange={setShowAddPhaseDialog}
                    >
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="mr-1 h-4 w-4" />
                          Add Phase
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Custom Phase</DialogTitle>
                          <DialogDescription>
                            Add a new phase to your construction timeline.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="phaseName">Phase Name</Label>
                            <Input
                              id="phaseName"
                              value={newPhaseName}
                              onChange={(e) => setNewPhaseName(e.target.value)}
                              placeholder="Enter phase name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phaseDuration">
                              Duration (Days)
                            </Label>
                            <Input
                              id="phaseDuration"
                              type="number"
                              min="1"
                              value={newPhaseDuration}
                              onChange={(e) =>
                                setNewPhaseDuration(
                                  parseInt(e.target.value) || 1,
                                )
                              }
                            />
                          </div>
                          <Button onClick={addCustomPhase} className="w-full">
                            Add Phase
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" onClick={exportPDF}>
                      <Mail className="mr-1 h-4 w-4" />
                      Export PDF
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {timeline.length === 0 ? (
                <div className="text-aliceBlue py-12 text-center">
                  <Calendar className="mx-auto mb-4 h-12 w-12 opacity-30" />
                  <p className="opacity-80">
                    Fill out the project details and click "Generate Timeline"
                    to see your construction schedule
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {timeline.map((phase, index) => (
                    <div
                      key={phase.id}
                      className="bg-muted/50 flex items-center gap-4 rounded-lg p-3"
                    >
                      <div className="flex flex-col gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => movePhaseUp(index)}
                          disabled={index === 0}
                          className="h-4 p-0 hover:bg-transparent"
                        >
                          <div className="flex h-2 w-4 items-center justify-center">
                            <div className="h-0 w-0 border-r-4 border-b-4 border-l-4 border-transparent border-b-gray-600"></div>
                          </div>
                        </Button>
                        <GripVertical className="text-aliceBlue h-4 w-4 cursor-move" />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => movePhaseDown(index)}
                          disabled={index === timeline.length - 1}
                          className="h-4 p-0 hover:bg-transparent"
                        >
                          <div className="flex h-2 w-4 items-center justify-center">
                            <div className="h-0 w-0 border-t-4 border-r-4 border-l-4 border-transparent border-t-gray-600"></div>
                          </div>
                        </Button>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h4 className="font-medium">{phase.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {phase.duration} days
                            </Badge>
                            {phase.editable && (
                              <>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    if (editingPhase === phase.id) {
                                      setEditingPhase(null);
                                    } else {
                                      setEditingPhase(phase.id);
                                      setEditDuration(phase.duration);
                                    }
                                  }}
                                >
                                  <Edit3 className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deletePhase(phase.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Gantt Bar */}
                        <div className="relative h-6 rounded bg-gray-200">
                          <div
                            className="bg-primary absolute h-full rounded"
                            style={{
                              left: `${(phase.startDay / totalDuration) * 100}%`,
                              width: `${(phase.duration / totalDuration) * 100}%`,
                            }}
                          />
                        </div>

                        <div className="text-aliceBlue mt-1 flex justify-between text-xs">
                          <span>Day {phase.startDay}</span>
                          <span>Day {phase.endDay}</span>
                        </div>

                        {editingPhase === phase.id && (
                          <div className="mt-3 flex items-center gap-2">
                            <Label className="text-xs">Duration:</Label>
                            <Input
                              type="number"
                              min="1"
                              value={editDuration}
                              onChange={(e) =>
                                setEditDuration(parseInt(e.target.value) || 1)
                              }
                              className="h-8 w-20 text-xs"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  updatePhase(phase.id, editDuration);
                                }
                              }}
                            />
                            <span className="text-aliceBlue text-xs">days</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                updatePhase(phase.id, editDuration)
                              }
                            >
                              <Save className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Educational Content */}
      <div className="mt-16 space-y-12">
        {/* CTA Section */}
        <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black p-8 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/20 rounded-full p-3">
                <Zap className="text-primary h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Streamline Your Project Management
            </h2>
            <p className="text-aliceBlue mx-auto mb-6 max-w-3xl text-lg">
              Contractor+ is the ultimate solution that combines the best in
              construction project management and relationship management into
              the perfect operating system for build and service contractors.
            </p>
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="bg-shutter mb-3 rounded-lg p-4">
                  <BarChart3 className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Project Management</h3>
                <p className="text-aliceBlue text-sm">
                  Advanced scheduling, resource allocation, and progress
                  tracking
                </p>
              </div>
              <div className="text-center">
                <div className="bg-shutter mb-3 rounded-lg p-4">
                  <Users className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Client Relationships</h3>
                <p className="text-aliceBlue text-sm">
                  Streamlined communication and client management tools
                </p>
              </div>
              <div className="text-center">
                <div className="bg-shutter mb-3 rounded-lg p-4">
                  <Calendar className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Complete Integration</h3>
                <p className="text-aliceBlue text-sm">
                  Everything you need in one powerful platform
                </p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link
                href="/project-management-software-for-contractors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Learn More About Contractor+
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* How-to Guide */}
        <div className="border-stiletto rounded-xl border p-8">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Master Construction Timeline Planning
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Project Setup</h3>
                <p className="text-aliceBlue text-sm">
                  Define project category, type, and complexity to get accurate
                  estimates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Generate Timeline</h3>
                <p className="text-aliceBlue text-sm">
                  Our AI analyzes your inputs to create industry-standard
                  timelines
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Customize Phases</h3>
                <p className="text-aliceBlue text-sm">
                  Edit durations, delete unnecessary phases, and adjust to your
                  needs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">4</span>
                </div>
                <h3 className="mb-2 font-semibold">Export PDF</h3>
                <p className="text-aliceBlue text-sm">
                  Generate professional PDF timelines for client presentations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="text-primary mr-2 h-5 w-5" />
                Timeline Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Buffer Time:</strong> Add 10-15% buffer to each
                    phase for unexpected delays
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Weather Considerations:</strong> Account for
                    seasonal weather patterns in your region
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Permit Processing:</strong> Research local permit
                    timelines and plan accordingly
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Resource Availability:</strong> Consider material
                    delivery times and labor schedules
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="text-primary mr-2 h-5 w-5" />
                Client Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Set Expectations:</strong> Share realistic timelines
                    early in the project
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Regular Updates:</strong> Provide weekly progress
                    reports and timeline adjustments
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Visual Communication:</strong> Use Gantt charts to
                    explain project phases clearly
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Change Management:</strong> Document timeline
                    impacts of any project changes
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Industry Insights */}
        <Card className="bg-shutter">
          <CardHeader>
            <CardTitle className="text-center">
              Industry Timeline Insights
            </CardTitle>
            <CardDescription className="text-center">
              Based on thousands of construction projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">73%</div>
                <p className="text-aliceBlue text-sm">
                  of projects finish within 2 weeks of planned completion when
                  using detailed timelines
                </p>
              </div>
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">45%</div>
                <p className="text-aliceBlue text-sm">
                  reduction in client complaints when timelines are shared
                  upfront
                </p>
              </div>
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">60%</div>
                <p className="text-aliceBlue text-sm">
                  of contractors report better resource planning with visual
                  timelines
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
