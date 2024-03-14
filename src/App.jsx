import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/component/Navigation/Header'
import LeftNav from './assets/component/Navigation/LeftNav'
import Videos from './assets/component/content/Videos'


function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  // Function to toggle navigation style
  const navStyle = () => {
    setIsNavOpen(!isNavOpen);
    console.log("hey");
  };

  return(
    <>
     <Header onClick={navStyle} />
     <LeftNav isNavOpen={isNavOpen} />
     <Videos isNavOpen={isNavOpen} />
    </>

  );
}

export default App
