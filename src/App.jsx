import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import { useEffect, useState } from "react";
import BubbleComponent from "./components/BubbleComponent";

function App() {
  const [activeLink,setActiveLink]=useState('home')

  const handleActiveComponent=(link)=>{
    setActiveLink(link)
  }
  return (
    <>
      <BubbleComponent />
      <MainNavbar onNavItemClick={handleActiveComponent} />
      <Home isActive={activeLink==='home'}/>
      <About isActive={activeLink==='about'}/>
      <Skills isActive={activeLink==='skills'} />
      <Portfolio isActive={activeLink==='portfolio'}/>
      <ContactMe isActive={activeLink==='contact'}/>
    </>
  );
}

export default App;
