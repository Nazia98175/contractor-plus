import React from "react";
import FieldServiceCard from "./FieldServiceCard";
import { ServiceData } from "@/types";

const servicedata: ServiceData[] = [
  {
    heading: "Customer Relationship Management",
    features: [
      {
        title: "Contact profiles + communication history",
        description:
          "See every call, text, and email tied to each contact, all in one place.",
      },
      {
        title: "Property profiles",
        description:
          "Just like customers, each property gets its own profile with full job history, files, and communication timeline.",
      },
      {
        title: "Role-based contact labeling",
        description:
          "Whether owner, tenant, or property manager, label contacts by role within a profile.",
      },
      {
        title: "Client portal access",
        description:
          "Give your clients a clean, professional portal to view estimates, invoices, and project updates.",
      },
      {
        title: "Timeline view for every client and property",
        description:
          "Scroll through a full history of every interaction, file, and update tied to each person or place.",
      },
      {
        title: "Contracts, eSign, and payments",
        description:
          "Quotes become contracts, contracts get signed, and invoices get paid—all in one flow.",
      },
      {
        title: "Scheduled follow-ups",
        description:
          "Business keeps you busy. Scheduled follow-ups make sure nothing slips through the cracks.",
      },
    ],
    user: "Excellent field tracking!",
    username: "John Doe",
  },
  {
    heading: "Job Management",
    features: [
      {
        title: "Contact profiles",
        description:
          "Communication history See every call, text, and email tied to each contact, all in one place.",
      },
      {
        title: "Property profiles",
        description:
          "Just like customers, each property gets its own profile with full job history, files, and communication timeline.",
      },
    ],
    user: "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look.",
    username: "Satisfied Contractor+ User",
  },
  {
    heading: "Streamlined, Itemized Estimates",
    features: [
      {
        title: "Easy Interface",
        description:
          "No clunky spreadsheets required. Just click, add, and organize.",
      },
      {
        title: "Professional Layout",
        description:
          "Brand your estimate exactly how you like. Make it look buttoned-up so your clients say “yes” faster.",
      },
    ],
    user: "“I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look.” ",
    username: "Satisfied Contractor+ User",
  },
  {
    heading: "Streamlined, Itemized Estimates",
    features: [
      {
        title: "Easy Interface",
        description:
          "No clunky spreadsheets required. Just click, add, and organize.",
      },
      {
        title: "Professional Layout",
        description:
          "Brand your estimate exactly how you like. Make it look buttoned-up so your clients say “yes” faster.",
      },
    ],
    user: "“I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look.” ",
    username: "Satisfied Contractor+ User",
  },
  {
    heading: "Streamlined, Itemized Estimates",
    features: [
      {
        title: "Easy Interface",
        description:
          "No clunky spreadsheets required. Just click, add, and organize.",
      },
      {
        title: "Professional Layout",
        description:
          "Brand your estimate exactly how you like. Make it look buttoned-up so your clients say “yes” faster.",
      },
    ],
    user: "“I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look.” ",
    username: "Satisfied Contractor+ User",
  },
];

const FieldService: React.FC = () => {
  return (
    <div className="py-10 px-2 relative bg-kuroiBlack z-20">
      <div className="blur-xl bg-kuroiBlack -bottom-10 h-32 right-0 absolute w-[102%]"></div>
      <div className="absolute bg-bottom w-full h-[134px] left-0 bottom-0 rotate-180"></div>
      {servicedata.map((service, index) => (
        <FieldServiceCard service={service} key={index} />
      ))}
    </div>
  );
};

export default FieldService;
