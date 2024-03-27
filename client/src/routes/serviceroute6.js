import React, { useState } from 'react';
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute6 = () => {
  const [virtualserviceMappings] = useState([ 
    {
      h1: "1. Chief Executive Officer (CEO)",
      points: [
        "Curate, communicate and implement the mission, vision, and overall direction of the organization",
        "Strategy, execution governance, operations control, and digital transformation",
        "Guidance and mentorship to all functions and business teams",
        "Team review mechanism",
      ],
    },
    {
      h1: "2. Chief Finance Officer (CFO)",
      points: [
        "Strategic, regular/ on-demand virtual CFO",
        "Focus on strategy, governance, compliance",
        "Building of internal control mechanism",
        "Advisory on working capital management, funding, budgeting, accounting, taxation, automation, etc.",
        "Targets ROI and positive cash flows",
      ],
    },
    {
      h1: "3. Chief Human Resource Officer (CHRO)",
      points: [
        "Strategic, regular/on-demand virtual CHRO",
        "Human capital strategy",
        "Curation of policies, processes & organization structure",
        "Compensation & benefits",
        "JD mapping, PMS & succession planning",
        "Organization development & change",
        "Training Need Identification, coaching & mentorship",
      ],
    },
    {
      h1: "4. Chief Information & Technology Officer (CIO / CTO)",
      points: [
        "Technology Strategy - vision, infra & tech stack planning",
        "Project management & governance",
        "Automation, digitization & data analytics",
        "ERP identification and implementation guidance",
        "SCM - Optimal pricing & vendor selection",
        "Cyber security & audits",
        "C-level reporting",
      ],
    },
    {
      h1: "5. Chief Legal & Secretarial Officer (CLSO)",
      points: [
        "Strategic, regular/on-demand virtual CLO/CSO",
        "Qualified law expert for legal strategy, risks & governance",
        "Advisory on business set-up & registrations",
        "Drafting, standardization & vetting of all contracts",
        "Due Diligence, IPR, ESOP, other advisory",
        "Contract framework",
      ],
    },
    {
      h1: "6. Chief Marketing Officer (CMO)",
      points: [
        "Strategic & virtual CMO",
        "Market research, strategy & planning",
        "PR, content, web/graphic design",
        "Marketing operations (Project Planning, Creative Process, Marketing Technology, Brand Compliance, Marketing Performance Measurement)",
        "Design & production advisory",
      ],
    },
    {
      h1: "7. Chief Sales Officer (CSO)",
      points: [
        "Curate, communicate and implement the mission, vision, and overall direction of the organization",
        "Strategic & virtual CSO",
        "Market Research & Organization Diagnostic",
        "Go-To-Market Consulting",
        "Structure and Operations Consulting & Training",
        "Sales Force Automation",
        "Distribution expansion, Online marketplace, E-commerce consulting",
        "Field force outsourcing",
      ],
    },
    {
      h1: "8. Chief Customer-Success Officer (CCO)",
      points: [
        "Strategic & virtual CCO",
        "Customer & Market Research",
        "Customer lifecycle management",
        "Call Centre Set-up & Operations",
        "CRM solutions",
        "Know your customer (KYC)",
        "Customer Loyalty & Engagement",
        "Retail Operations & Experience",
        "Collection, Credit & Risk Analysis",
      ],
    }, 
  ]); 

  return (
    <div>
      <Header />
      <Form
        serviceName="Virtual CXO"
        apiRoute="http://localhost:3001/virtual-cxo"
      />
      <Servicetemplate serviceMappings={virtualserviceMappings} />
      <Footer />
    </div>
  );
};

export default ServiceRoute6;
