import React from 'react'
import Navbar from './Navbar'
import './skills.css'

function Skill() {
  return (
    <div className="skill">
      <Navbar/>
      <h2>My skills</h2>
      <div className='S-container'>
        <div className="left-cards">
            <div className="cards">
              <h3>Programming</h3>
                  <ul>
                    <li>Git and Github</li>
                    <li>Programming</li>
                    <li>Software developer</li>
                  </ul>
            </div>
            <div className="cards">
              <h3>Others</h3>
              <ul>
                <li>Leadership</li>
                <li>Working Under Pressure</li>
                <li>Comunication</li>
                <li>Working with others</li>
              </ul>
            </div>
            <div className="cards">
              <h3>Technologies</h3>
              <ul>
                <li>HTML</li>
                <li>C #</li>
                <li>Javascript</li>
                <li> C++</li>
              </ul>
            </div>
        </div>
    </div>
    </div>
   
   
  )
}

export default Skill