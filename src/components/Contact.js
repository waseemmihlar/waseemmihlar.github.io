import React from 'react'
import Navbar from '../initial_components/Navbar'
import Footer from '../initial_components/Footer'
import Heroimg from '../initial_components/proHeroimg'
import Form from '../initial_components/Form'

function Contact() {
  return (
   <>
   <Navbar />
     <Heroimg heading="Contact" text="Lets have a chat"/>
     <Form />
   <Footer />
   </>
  )
}

export default Contact
