import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/component/Navigation/Header'
import LeftNav from './assets/component/Navigation/LeftNav'
import Videos from './assets/component/content/Videos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <LeftNav />
      <Videos />
     
        


      
    </>
  )
}

export default App
