import { useEffect, useState } from "react";
import {NavBar} from "./components/navBar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import Contact from "./components/contact";

function App() {




  return (
    <>
    
      <div className = "App">
        <NavBar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
