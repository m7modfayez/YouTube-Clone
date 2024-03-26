import { useState, useEffect } from 'react'  
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/component/Navigation/Header'
import LeftNav from './assets/component/Navigation/LeftNav'
import Videos from './assets/component/content/Videos'


function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const navStyle = () => {
    setIsNavOpen(!isNavOpen);
    console.log("hey");
  };

  useEffect(() => {
    // Function to toggle navbar based on screen width
    function toggleNavbar() {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setIsNavOpen(screenWidth >= 768); 
    }

    toggleNavbar();
  }, []);
  

  return(
    <>
     <Header onClick={navStyle} />
     <LeftNav isNavOpen={isNavOpen} />
     <Videos isNavOpen={isNavOpen} />
    </>

  );
}

export default App
