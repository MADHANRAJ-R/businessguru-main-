import './App.css';
// import HomeImg1 from "./Assets/home-img-1.avif";
// import HomeImg2 from "./Assets/home-img-2.avif";
// import HomeImg3 from "./Assets/home-img-3.avif";
import Footer from './Components/footer';
import Form from './Components/form';
// import Home from './Components/home';
// import Intro from './Components/intro';
import Nav from "./Components/nav";
// import ServicesPortfolio from "./Components/servicesPortfolio";

// import Towhom from './Components/towhom';
// import Why from './Components/why';
import Servicetemplate from './Components/servicetemplate';

function App() {
  // const images = [HomeImg1, HomeImg2, HomeImg3];
  return (
    <div className="App">
      <Nav />
      <Form serviceName="StartUp Advisory"
        apiRoute="http://localhost:3001/send-email" />
      <Servicetemplate />
      
      {/* <Home images={images} />
      <Intro />
      <ServicesPortfolio />
      <Why />
      <Towhom /> */}
      <Footer />
      
    </div>
  );
}

export default App;
