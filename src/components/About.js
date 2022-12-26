import React from 'react'

import Navbar from '../initial_components/Navbar'
import Footer from '../initial_components/Footer'
import Heroimg from '../initial_components/proHeroimg'
import Aboutcontent from '../initial_components/Aboutcntent'

function About() {
  return (
   <>
   <Navbar />
     <Heroimg heading="About" text="I am a Front-End & Back-End developer"/>
    <Aboutcontent />
   <Footer />
   </>
  )
}

export default About
