import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./project.css"
 const Project = () => {
  const page=useNavigate()
  return (
    <div id="project">
        <h1 id="hd2">Project Page</h1>
        <h3 id="h3">
            This page descibes about the project which I did in the FirstSem.<br></br>
        </h3>
        <para className="p2"><h2>About The Project</h2><br></br>
            The name of the project which I did was "SIMULATION BASED E-LEARNING WEBSITE".<br></br>
            This was the first project which i did.
            I was a part of  this project in the buildathon competition counducted by WebOps.<br></br>
            Most of the frontend in this project was done by me.</para>
            
        <para className="p2">It is basically a website which offers some simulation from the internet that are availble for the user.
            The user can access it and can manage the simulation.The user can see the content available only if he has logged in the website.
            It contains a login, signup,signout and many other webpages also.
            As this project was a bit heavy I separately uploaded the entire project code in the github.

             </para><br></br>
             <button id="btt1"onClick={()=>
    page('/about')}>About</button> 
    <button id="btt2" onClick={()=>
    page('/contact')}>Contact</button>
    <button id="btt3" onClick={()=>page('/')}> Home </button>

            
        
    </div>
  )
}
export default Project
