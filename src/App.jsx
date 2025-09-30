import { useState } from 'react'
// import './App.css'
import { Header } from './components/header/header';
import { Nav } from './components/navi/navi';
import { Content } from './components/content/content';
import { Offer } from './components/offer/offer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header></Header>
        <Nav></Nav>
        <Content></Content>
        <Offer></Offer>
    </>
  )
}

export default App
