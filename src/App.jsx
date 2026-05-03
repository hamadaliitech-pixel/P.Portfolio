import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Heropallete from "./Components/Heropallete";
import Footer from "./Components/Footer";
import Lenis from "lenis";
const App = () => {
  
  useEffect(() => {
    return () => {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        smoothTouch: false,
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return ()=>{
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Heropallete />
      <Footer />
    </div>
  );
};

export default App;
