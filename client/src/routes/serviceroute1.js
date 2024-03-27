import React, { useState } from 'react';
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
import Servicetemplate from "../Components/servicetemplate";

const ServiceRoute1 = () => {
  const [startupserviceMappings] = useState([   
     {
      h1: '1. Business Registration',
      h2: 'Transparent | Seamless | SLA-driven',
      points: [
        'Creation of Company',
        'Governance & Forecasting Cash Flow & Accounting Systems',
        'ROC Registration'
        
      ]
    },
    {
      h1: '2. Legal & Compliance',
      h2: 'Domain Expertise | 100% Compliance | Dedicated KAM',
      points: [
        'Company Law based Compliances',
        'Taxation based Compliances',
        'Compliance under Labour Laws',
        'Event based Compliance such as those for a Start-up with FDI for compliance with FEMA',
        'Contract Framework Design'  
      ]
    },
    {
      h1: '3. GST & Income Tax Registration',
      h2: 'Domain Expertise | 100% Compliance | Dedicated KAM',
      points: [
        'GST and Income Tax Registration',  
        'Periodic filing of GST and Income Tax Returns'
      ]
    },
    {
      h1: '4. Government Schemes and Subsidies',
      h2: 'Tax Savings | Applicable Govt. Subsidies',
      points: [
        'MSME Registration',
        'Income Tax Exemption for Start-ups', 
        'Pradhan Mantri Yojana, Venture Capital Assistance. etc.' 
      ]
    },
    {
      h1: '5. Market Research and Competition Benchmarking',
      h2: 'Primary & Secondary Sources | SWOT Analysis',
      points: [
        'Market research and strategic planning',  
        'Customer research and analytics - segmentation, behaviour analysis, customer lifecycle analysis',
        'Competition benchmarking',
        'Pricing and distribution'
      ]
    },
    {
      h1: '6. Business Model and Financial Plan',
      h2: 'Cost Effectiveness | Risk Mitigation | Dedicated KAM',
      points: [
        'Business model review and validation', 
        'Financial Modelling'
      ]
    },
    {
      h1: '7. Pre-Due Diligence and Due Diligence',
      h2: 'Coverage | Quality | Assurance',
      points: [
        'Pre & due diligence – legal, financial, BGV and HR/Labour laws', 
        'Financial Profile',
        'Loan Portfolio and Equity',
        'Systems & Controls',
        'Governance & Strategy'
      ]
    },
    {
      h1: '8. Pitch Deck Curation',
      h2: 'Best-in-class | Investor Pro | Market Intelligence',
      points: [
        'Highlight market size and market opportunity',  
        'Compare competition',
        'Milestones and accomplishments',
        'Marketing strategy',
        'Revenue model',
        'Financials'
      ]
    },
    {
      h1: '9. Capital Raise Support',
      h2: 'Right Strategy | Right Partnerships | Placement & Positioning',
      points: [
        'Create a scaling strategy', 
        'Receive funding for future development',
        'Angel investors, venture capitalists, family offices, financial institution',
        'Registered Business/ Idea valuation'
      ]
    },
    {
      h1: '10. Sales, Marketing & Branding',
      h2: 'Customized and Curated Approach | Result-oriented and Actionable GTM',
      points: [
        'Go-to-market (GTM) Consulting Sales, Business Development and Marketing', 
        'Omnichannel Expansion',
        'Marketing & Branding',
        'Marketing Execution – ATL, BTL, Digital Marketing',
        'Sales organization structure/ operations consulting & training'
      ]
    },
    {
      h1: '11. Accounting, Book-keeping and Taxation',
      h2: 'Automated Processes | Tax Savings | SLA-driven',
      points: [
        'Management Accounting & Dashboarding', 
        'Periodic GST, TDS & ROC returns',
        'Preparation of books of accounts (Trading, P&L, B/S, Cash flow)',
        'Treasury Management'
      ]
    },
    {
      h1: '12. Hiring Process and Payroll Management',
      h2: 'Employee Pro | 360 degree Coverage | Recruitment Support',
      points: [
        'HR shared service from hiring to severance',
        'Talent acquisition and RPO',
        'HR Process and Policy Curation',
        'Payroll processing and expense reimbursements',
        'Statutory HR and labour compliances'
      ]
    },
    {
      h1: '13. Interim Executive Management & Virtual CXO Service',
      h2: 'Industry Leader and Domain Experts | Minimum Commitments',
      points: [
        'Virtual CXO’s',
        'Transformation Management',
        'Business Improvement',
        'Strategy development',
        'Crisis Management'  
      ]
    },
    {
      h1: '14. Organization Scaling',
      h2: 'Adaptable, Scalable and Flexible Solutions | Automation Prioritization',
      points: [
        'Create a scaling strategy',
        'Receive funding for future development',
        'Get rid of processes that don’t work',
        'Automation journey strategy for efficient operations'
      ]
    },
    {
      h1: '15. Technology Enablement',
      h2: 'Right Partner and Tool Selection | Implementation Support',
      points: [
        'ERP Implementation',
        'Security including cyber security attacks, etc.',
        'Process Automations in line with the overall objectives'
      ]
    },
    {
      h1: '16. Exit Strategy',
      h2: 'Partner Selection | Transparent and Compliant Practices',
      points: [
        'Sell stake to partner/ investor',
        'Planned liquidation',
        'IPO',
        'Merger & Acquisition'
      ]
    },
  
]);
  

  return (
    <div>
      <Header />
      <Form
        serviceName="Startup Advisory"
        apiRoute="http://localhost:3001/startup-advisory"
      />
      <Servicetemplate 
      serviceMappings={startupserviceMappings}
      
      />
      <Footer />
    </div>
  );
};

export default ServiceRoute1;
