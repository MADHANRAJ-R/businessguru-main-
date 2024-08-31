import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/homeRoute";
import ServiceRoute from "./routes/serviceroute";
import ServiceRoute1 from "./routes/serviceroute1";
import ServiceRoute2 from "./routes/serviceroute2";
import ServiceRoute3 from "./routes/serviceroute3";
import ServiceRoute4 from "./routes/serviceroute4";
import ServiceRoute5 from "./routes/serviceroute5";
import ServiceRoute6 from "./routes/serviceroute6";
import ServiceRoute7 from "./routes/serviceroute7";
import ServiceRoute8 from "./routes/serviceroute8";
import ContactRoute from "./routes/contactroute";
import CompanyRoute from "./routes/companyroute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/company" element={<CompanyRoute />} />
        <Route path="/general-enquiry" element={<ServiceRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/services/startup-advisory" element={<ServiceRoute1 />} />
        <Route path="/services/business-strategy" element={<ServiceRoute2 />} />
        <Route
          path="/services/marketing-consulting"
          element={<ServiceRoute3 />}
        />
        <Route path="/services/digital-marketing" element={<ServiceRoute4 />} />
        <Route path="/services/lead-generation" element={<ServiceRoute5 />} />
        <Route path="/services/virtual-cxo" element={<ServiceRoute6 />} />
        <Route path="/services/web-development" element={<ServiceRoute7 />} />
        <Route
          path="/services/customer-success-consulting"
          element={<ServiceRoute8 />}
        />
      </Routes>
    </Router>
  );
}

export default App;
