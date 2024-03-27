import React, { useState } from 'react';
import Header from "../Components/nav";
import Footer from "../Components/footer";
import Form from "../Components/form";
// import Servicetemplate from "../Components/servicetemplate";
import Hrservice from '../Components/hrservice';

const ServiceRoute2 = () => {
  const [hrserviceMappings] = useState([   
    {
     h1: '1. Shared Services',
     points: [
       'Human Capital Management (HCM) through dedicated KAMs and automation enabled implementation to analyze general control mechanisms'
     ]
   },
   {
    h1: '2. Training & Development',
    points: [
      'Industry specific leadership/ middle management/ technical trainings',
      'Optimizing L&D with automation',
      'SHE (Safety, Health & Employee Wellness) Programs'
    ]
  },
  {
    h1: '3. Compliances',
    points: [
      'Compliance posture assessment, recommendations & implementation support for HR laws including applicable federal, state & local regulations',
      'Cloud based automated solutions'
    ]
  },
  {
    h1: '4. HR Consulting',
    points: [
      'Organization culture & development, productivity enhancement, cost optimization, etc.',
      'Employee engagement & policy design',
      'NAPs, NEEM, POSH, POCSO advisory'
    ]
  },
  {
    h1: '5. Talent Acquisition',
    points: [
      'Recruitment support across all levels and for IT and Non IT positions',
      'AI based ATS software'
    ]
  },
  {
    h1: '6. HR Automation',
    points: [
      'Implementation of the right and cost effective tech tools',
      'Cloud & On-premise HRMS',
      'Tech enablement across employee life cycle'
    ]
  }
   
 
]);
  return (
    <div>
      <Header />
      <Form
        serviceName="Human Resource"
        apiRoute="http://localhost:3001/human-resource"
      />
      {/* <Servicetemplate serviceMappings={hrserviceMappings} /> */}
      <Hrservice serviceMappings2={hrserviceMappings}/>
      <Footer />
    </div>
  );
};

export default ServiceRoute2;
