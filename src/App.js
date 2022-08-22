import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Experience  from "./components/Experience";
import Contact from "./components/Contact";
import LinksMobile from "./components/LinksMobile";


function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <NavBar />
      <Home />
      <About />
      <Portfolio /> 
      <Experience />
      <LinksMobile />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
