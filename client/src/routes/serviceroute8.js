import React, { useState } from 'react';
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute8 = () => {
  const [cscserviceMappings] = useState([ 
    {
      h1: "1. Virtual Chief Customer Officer",
      h2: "vCCO - Management of Customer Touch-points",
      points: [
        "Market research",
        "Customer Retention (B2B, B2C)",
        "Know Your Customer (KYC)",
        "Call Centre Management",
        "Customer Relationship Management (CRM Solutions)",
        "Customer Loyalty",
        "In-store Experience",
        "Credit & Recovery",
      ],
    },
    {
      h1: "2. Customer & Market Research",
      h2: "Research & Benchmarking",
      points: [
        "Voice of the customer - CSAT, NPS, CES",
        "A/B tests and experiments",
        "Digital experience delivery",
        "Web/mobile engagement & satisfaction",
        "Customer experience assessment across all touch points and benchmarking with competition practices",
        "Un-biased & transparent planning, sampling & execution",
        "Domain expertise",
        "Automated tools",
      ],
    },
    {
      h1: "3. Customer Life Cycle Management (B2B, B2C)",
      h2: "Customer lifecycle value",
      points: [
        "Process Reengineering and reviews on customer service/call center/IVR/digital",
        "Platforms for insights with experience data (X-data) and operational data (O-Data)",
        "Closed Loop Follow-up",
        "Customer Retention - Prediction of individual customer behavior & action",
        "Personalized Services (HNI)",
        "360 assessments to help identify gaps & inefficiencies",
        "Platform to help predict & manage the CLCM",
      ],
    },
    {
      h1: "4. Know Your Customer (KYC)",
      h2: "Establish customer identity",
      points: [
        "Customer identification, verification and screening including Tele / Field Verification",
        "Periodic & event-driven compliance assessments",
        "Background Verification (BGV)",
        "Customer Due Diligence",
        "Automation tools & robotics",
        "Prevention of Fraud and risk mitigation",
        "Assurance on background checks",
      ],
    },
    {
      h1: "5. Call Centre Setup & Operations",
      h2: "Customer helpdesk",
      points: [
        "Inbound/Outbound Operations",
        "National/International Process",
        "All Dialer Operations",
        "Cloud Base Calling",
        "24-hour Available Setup",
        "Dedicated Helpdesk Support",
        "Calling database services",
        "New Call Centre Setup",
        "Build, Operate & Transfer (BOT)",
        "Cost efficient & SLA driven call center facility",
        "Professional set-up with experienced/ trained resources",
      ],
    },
    {
      h1: "6. Customer Relationship Management (CRM) Solutions",
      h2: "Automation enablement",
      points: [
        "Customized CRM development",
        "CRM implementation",
        "CRM testing - Business continuity",
        "Customer Engagement solutions",
        "Client Management Software",
        "Outbound solution Contact Portal",
        "Ticketing Solutions",
        "Multi partner options - Sales Force, Zoho, Microsoft, SaaS",
        "Scalable, Secure, Integratable",
        "Best-in-class service features",
      ],
    },
    {
      h1: "7. Customer Loyalty, Engagement & Win-back",
      h2: "Customer Segmentation",
      points: [
        "Customer AON, Behavior, Revenue, Territory, etc. based segmentation",
        "Up/cross selling programs",
        "Engagement-Based Loyalty Program",
        "AI based Personalized 1:1 Engagement & Omnichannel Campaign Automation",
        "Revenue & ROI enhancement",
        "Increased engagement with AI & Deep data analytics led segmentation",
      ],
    },
    {
      h1: "8. Retail Operations and Customer Experience",
      h2: "Store experience",
      points: [
        "Franchise Business set-ups in COCO, COFO, FOCO & FOFO models",
        "Operational SLAs, processes, queue management systems, Front Desk Operations",
        "Employee Training on quality",
        "Competition Benchmarking",
        "Assessment & governance",
        "Domain experts led planning, execution & governance",
        "Cost efficiency",
        "Process improvements",
      ],
    },
    {
      h1: "9. Collection, Credit and Risk Analysis",
      h2: "Credit & Recovery",
      points: [
        "Dunning & Return Mail Tracking",
        "Pre-Litigation Mediation",
        "Debt Recovery and Sales",
        "Collection & Communication Management (Zero/ Flow Bucket)",
        "Vintage Recovery & Arbitration",
        "Credit Score Analysis",
        "Litigation services",
        "Digital platforms enablement",
        "Simplified & transparent process",
        "Banking, NBFC, Automotive & Telecom Specialization",
      ],
    }
  ]); 

  return (
    <div>
      <Header />
      <Form
        serviceName="Customer Success Consulting"
        apiRoute="http://localhost:3001/customer-success-consulting"
      />
      <Servicetemplate serviceMappings={cscserviceMappings} />
      <Footer />
    </div>
  );
};

export default ServiceRoute8;
