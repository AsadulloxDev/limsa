import React from 'react'
import Header from '../Header/Header'
import Section from '../../Pages/Section/Section'
import MarqueeContent from '../../Pages/Marquee/Marquee'
import Project from '../../Pages/Project/Project'

function Home() {
  return (
    <div>
        <Header></Header>
        <Section></Section>
        <MarqueeContent></MarqueeContent>
        <Project></Project>
    </div>
  )
}

export default Home