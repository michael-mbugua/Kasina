import React from 'react'
import "./about.css"

function About() {
  return (
<div className='About-container'>
            <div className="About-header">
                <h1>About Me</h1>
                <h6>Know About Me</h6>
            </div>
            <div className="about-body">
                <div className="left">
                    <h1 className='name'>My name is Cornelius Kasina</h1>
                    <p>
                    I'm Diligent and highly motivated young professional with a passion to progress within the software development field and enthusiastically ready to learn new languages that might be needed of me.Always eager to exercise problem solving through building websites that simplify the problem at hand.
                    </p>
                    <div className="span">
                        <div><span>Age:</span>23</div>
                        <div><span>Gender:</span>Male</div>
                        <div><span>Language:</span>English,Swahili</div>
                        <div><span>Nationality:</span>Kenyan</div>
                        <div><span>Student:</span>Cooperative university of kenya</div>
                        <div><span>Course:</span> Bussiness information and technology</div>
                    </div>
                    <div className='btn'>
                    </div>
                </div>
                <div className="right">
                <div className="box1">
                        <div className='box-detail1'><h1>1+</h1>
                        <h3>Years of Expirience</h3>
                        </div>
                        <div className='box-detail1'><h1>10+</h1> 
                        <h3>Projects Done</h3>
                        </div>
                    </div>
                    <div className="box1">
                        <div className='box-detail1'><h1>3+</h1>
                        <h3>Happy clients</h3>
                        </div>
                        <div className='box-detail1'><h1>2+</h1> 
                        <h3>Certifications</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default About