import React from 'react';
import './Home.css'
import Kasina1 from '../assets/images/Kasina1.jpg'
import Kasina2 from '../assets/images/Kasina2.jpg'

function Home() {
  return (
    <div className='header'>
            <div className='Main-container'>
                <div className='description'>
                    <h2>Hi There!</h2>
                    <h1>I'm Cornelius Kasina</h1>
                    <h4>A Passionate <b>Web Developer</b></h4>
                    <p>
                    Creative Web Developer currently doing Business information and technology at the cooperative university of kenya
                    </p>
                </div>
                <div className="descriptionimage">
                    <img src={Kasina1} width="400"height="auto" />
                    {/* <img src={Kasina2} width="200"height="auto" /> */}
                </div>
            </div>
        <div className="btn">
                    <button className='color'>Contact me</button>
                </div>
    </div>
  )
}

export default Home