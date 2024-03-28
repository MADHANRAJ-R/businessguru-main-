import React, { useState } from 'react';
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute3 = () => {
  const [markettingserviceMappings] = useState([ 
    {
      h1: "1. Virtual Chief Marketing Officer",
      h2: "vCMO - Strategic partner to success",
      points: [
        "Virtual Marketing head services",
        "Market research, strategy & planning",
        "PR & content, Web & Graphic Design",
        "Marketing operations (Project Planning, Creative Process, Marketing Technology, Brand Compliance, Marketing Performance Measurement)",
        "Design & production - BTL Collaterals, Packaging Design, Photography, Video",
        "Affordable, scalable, and avoid turnover",
        "Domain expertise, unbiased insights & focus",
        "Strategy to unleash power of your business",
      ],
    },
    {
      h1: "2. Market Assessment",
      h2: "Cross-platform research & market intelligence",
      points: [
        "Market opportunity identification",
        "Market & competition tracking",
        "Customer and Trade research",
        "Measurement of reach across platforms - TV, OTT platforms, Digital Media, Audio & Press platforms",
        "Other customized research",
        "Unbiased research covering entire population and its shifting habits",
        "Coverage across all platforms & touch points",
      ],
    },
    {
      h1: "3. Marketing Strategy",
      h2: "Vision, action plan, expected outcomes",
      points: [
        "Understanding customer behavior",
        "SWOT analysis & Competition benchmarking",
        "Target marketing",
        "Developing marketing mix",
        "Design the execution strategy & Go-to-market (GTM)",
        "Execution",
        "Governance & course-correction",
        "Customized & effective marketing activities",
        "Positioning & Differentiation",
        "Increased Customers, Revenue & Margins",
      ],
    },
    {
      h1: "4. Brand Strategy",
      h2: "Transformation of Brand",
      points: [
        "Strategy & Essence - Purpose, positioning, proposition (Internal, Customer, Trade & Investor)",
        "Design - Reinvent visual & verbal identity across all platforms",
        "Launch - Brand launch internally and externally, off-line and digitally",
        "Communication design incl website, corporate profiles and investor pitch",
        "Articulation & communication of your core identity",
        "Brand awareness, perception & acceptance",
      ],
    },
    {
      h1: "5. Marketing Analytics & Insights",
      h2: "Customer analytics, methodology & tools",
      points: [
        "Customer analytics - Segmentation, Behavior analysis, Customer lifecycle analysis",
        "Methodology - Statistics, A/B analysis, AI & ML, other marketing analytics tools",
        "Automation tools - Salesforce/ CRM, Google analytics, SQL, Python, R, Tableau, Power BI, etc.",
        "Unlocking value through standardization & optimization",
        "Aids decision making",
      ],
    },
    {
      h1: "6. Digital Marketing",
      h2: "PPC, SEO, SMM",
      points: [
        "Search Engine Optimization (SEO)",
        "Content creation & marketing",
        "Paid Searches",
        "Social Media advertising",
        "Online marketplace & e-Commerce marketing",
        "Email, WhatsApp, SMS Marketing",
        "Online Reputation Management",
        "Conversion Rate Optimization",
        "Display & Design",
        "Increase customer loyalty & engagement",
        "Right targeting, lead pipeline & conversions",
        "Measurement of results & Brand credibility",
        "Latest marketing technologies and trends",
      ],
    }
  ]);
  return (
    <div>
      <Header />
      <Form
        serviceName="Marketing Consulting"
        apiRoute="http://localhost:3001/marketing-consulting"
      />
      <Servicetemplate serviceMappings={markettingserviceMappings}  />
      <Footer />
    </div>
  );
};

export default ServiceRoute3;
