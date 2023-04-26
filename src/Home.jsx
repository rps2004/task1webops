import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  const page=useNavigate()


  
  return (
    <div id="home"><h1 id="h1">Home</h1><br></br>
    <para id="para">
        Hello! This is Rudra Pratap Singh and here is my webpage.<br></br>
        #To know more about me please click the about button.<br></br>
        #To know about the project which I have done click the project button.<br></br>
        #To view my contact details click the contact button. <br></br>
 
    </para><br></br>
    <button id="b1" onClick={()=>
    page('/about')}>About</button> 
    <button id="b2" onClick={()=>
    page('/contact')}>Contact</button>
    <button id="b3" onClick={()=> page('/project')}>Project</button>
    
    
    
    </div>
  )
    }


export default Home