import About from "@/Components/About";
import { Herosec } from "@/Components/Herosec";
import Portfolio from "@/Components/Portfolio";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <>
    <Herosec />
    <About /> 
     <Portfolio />
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  );
}