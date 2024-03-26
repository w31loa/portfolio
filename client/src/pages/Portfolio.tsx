import React from 'react'
import Intro from '../components/Intro'
import Works from '../components/Works'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import Resume from '../components/Resume'

const Portfolio = () => {
  return (
    <div >
        <Intro/>
        <Works/>
        <About/>
        <Reviews/>
        <Blog/>
        <Resume/>
    </div>
  )
}

export default Portfolio