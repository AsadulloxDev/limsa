import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Section from './Pages/Section/Section'
import MarqueeContent from './Pages/Marquee/Marquee'
import Project from './Pages/Project/Project'


function App() {
  return (
    <>
      <Header></Header>
      <Section></Section>
      <MarqueeContent></MarqueeContent>
      <Project></Project>
    </>
  )
}

export default App