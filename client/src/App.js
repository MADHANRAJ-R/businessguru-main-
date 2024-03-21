import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/homeRoute";
import ServiceRoute from "./routes/serviceroute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/company" element={<HomeRoute />} />
        <Route path="/services" element={<ServiceRoute />} />
        <Route path="/contact" element={<HomeRoute />} />
        <Route path="/services/startup-advisory" element={<HomeRoute />} />
        <Route path="/services/human-resource" element={<HomeRoute />} />
        <Route path="/services/marketing-consulting" element={<HomeRoute />} />
        <Route path="/services/digital-marketing" element={<HomeRoute />} />
        <Route path="/services/lead-generation" element={<HomeRoute />} />
        <Route path="/services/virtual-cxo" element={<HomeRoute />} />
        <Route path="/services/web-development" element={<HomeRoute />} />
        <Route
          path="/services/customer-success-consulting"
          element={<HomeRoute />}
        />
      </Routes>
    </Router>
  );
}

export default App;
