import React from 'react'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import ScrollAnim from './Components/ScrollAnim'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Features  from './Components/Features'
import ClientsReview from './Components/ClientsReview'
import Card from './Components/Card'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-100'>
      <Header/>
      <LandingPage/>
      <ScrollAnim/>
      <About/>
      <Eyes/>
      <Features/>
      <ClientsReview/>
      <Card/>
    </div>
  )
}

export default App
