import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/homeRoute";

// import HomeImg1 from "./Assets/home-img-1.avif";
// import HomeImg2 from "./Assets/home-img-2.avif";
// import HomeImg3 from "./Assets/home-img-3.avif";
// import Footer from "./Components/footer";
// import Form from "./Components/form";
// import Home from './Components/home';
// import Intro from './Components/intro';
// import Nav from "./Components/nav";
// import ServicesPortfolio from "./Components/servicesPortfolio";

// import Towhom from './Components/towhom';
// import Why from './Components/why';
// import Servicetemplate from "./Components/servicetemplate";

function App() {
  // const images = [HomeImg1, HomeImg2, HomeImg3];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/company" element={<HomeRoute />} />
        <Route path="/services" element={<HomeRoute />} />
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
