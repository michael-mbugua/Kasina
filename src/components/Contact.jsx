import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
function Contact() {
    return (
        <div className='main'>
            <Navbar/>
            <div className='resume-head'> 
            <h2>Contact me</h2>
            </div>
            <div className='contact-container'>
            <div className="right-contact">
                    <div className="inputs">
                        Send Message
                        <form action="">
                            <div className="input1"><input type="text" placeholder='Name'/></div>
                            <hr />
                            <div className="input1"><input type="Email"  placeholder='Email'/></div>
                            <hr />
                            <div className="input1"><input type="text" placeholder='Subject' /></div>
                            <hr />
                            <div className="input1"><textarea type="textArea" placeholder='Message' /></div>
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact