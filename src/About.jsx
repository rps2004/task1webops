import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./About.css"


const AboutMe = () => {
  const page=useNavigate()
  return (
    
    <div id="about">
    <h1 id="head">About Page</h1><br/> 
    <para id="pg">
        My name is Rudra Pratap Singh.<br>
        </br>
        I was born in UttarPradesh but lived 12 years in Chennai.<br>
        </br>
        I am currently pursuing my first year Btech in Metallurgy and Materials in IIT Madras.<br>
        </br>I have keen interset in Web development so after coming to the campus I first applied for the buildathon competition.<br>
        </br>
        I found the competition very useful cause I got a chance to know many programming languages like Javascript and c# along with CSS and HTML.Also I came across 
        Figma, MongoDB,ExpressJS and other's. <br>
        </br>
        I know some programming languages like python , c# basics, javascript.<br>
        </br>
        My interest for the web development increased when i joined the buildathon competition.I got a handoff's experience on how people actually work together to build a project.
        <br/>I like to spend my time in learning new things.<br/>
      I also love playing various sports like table tennis, cricket etc.. .I also have a hobby of typing.<br></br>
      I want to be a part of the webops team and enrich myself with more knowledge in the web development sector. 
        

        
    
        




    </para><br></br>
    <button id="b1" onClick={()=>
    page('/contact')}>Contact</button>
    <button id="b2" onClick={()=> page('/project')}>Project</button>
    <button id="b3" onClick={()=>page('/')}>Home</button>
    
    
    </div>
  )
}
export default AboutMe;