import { useState } from 'react'
// import './App.css'
import { Header } from './components/header/header';
import { Nav } from './components/navi/navi';
import { Content } from './components/content/content';
import { Offer } from './components/offer/offer';
import { PriceList } from './components/Pricelist/PriceList';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header></Header>
        <Nav></Nav>
        <Content></Content>
        <Offer></Offer>
        <PriceList></PriceList>
        <About></About>
        <Portfolio></Portfolio>
    </>
  )
}

export default App
