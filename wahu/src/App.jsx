import React from "react";
import tailwindConfig from "../tailwind.config";
import "./index.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Sections from "./components/Sections"; 
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar /> 
    <Hero />  
    <Services />
    <Portfolio />
    <About />
    <Sections />
    <Footer />
    </>
  );
};

export default App;