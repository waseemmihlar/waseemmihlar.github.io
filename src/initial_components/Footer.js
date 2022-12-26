import React from 'react'
import {Fa500Px, FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaTwitter, FaVoicemail, FaWhatsapp} from 'react-icons/fa'
import './Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location' style={{display:"flex"}}>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Narammala, Kurunegala</p>
                    <p>Srilanka</p>
                </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +94 772688273</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    wazeemmuhammadh998@gmail.com</h4>
                </div>
            </div> 

            <div className='right'>
                <h4>About the Developper</h4>
                <p>
                This is me Waseem Mihlar. Junior Sofware Engineer
                I able to develop Mobile & Web Application Using
                Flutter, React Native, MERN Stack
                </p>
                <div className='social'>

                <a href="Tel:+94 772688273">
                <FaWhatsapp
                size={30} 
                style={{color:"#fff", 
                marginRight:"1rem"}} /></a>    


               <a href="mailto:waseemmuhammadh1005@gmail.com">
                <FaVoicemail
                size={30} 
                style={{color:"#fff", 
                marginRight:"1rem"}} /></a>

                <a href="https://www.linkedin.com/in/mihlar-wazeem998" target={'_blank'}>
                <FaLinkedin
                size={30} 
                style={{color:"#fff", 
                marginRight:"1rem"}} /></a>


                <a href="https://github.com/waseemmihlar" target={'_blank'}>
                <FaGithub
                size={30} 
                style={{color:"#fff", 
                marginRight:"1rem"}} /></a>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
