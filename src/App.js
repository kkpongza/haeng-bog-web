import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
    </div>
    <Footer />
    </div>
    
  );
}

export default App;
