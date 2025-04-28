import React from 'react'
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Hero1 from './hero1.jsx'
import Grid from './grid.jsx'
import Key from './key.jsx'
import RealStories from "./RealStories.jsx";
import Footer from './Footer.jsx'


const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Hero1 />
        <Grid />
        <Key />
        <RealStories />
        <Footer />
    </div>
  )
}

export default App


