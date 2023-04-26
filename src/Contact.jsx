import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Contact.css"

const Contact = () => {
  const page=useNavigate()
  return (
    <div id="contact">
        <h1 id="hd">
            CONTACT PAGE
        </h1>
        <para id="pg1">
            BELOW CONTAINS ALL THE MEANS FOR CONTACTING ME<br></br>
            Phone Number: 8072792070<br></br>
            WhatsApp Number: 9500037954<br></br>
            Smail: mm22b005@smail.iitm.ac.in<br></br>
            PersonalMail:rudra.rps2004@gmail.com<br></br>
            InstaId :rudra_.rps<br></br>
            Guthubid:rps2004
        
 
 
        </para><br></br>
        <button id="bt1" onClick={()=>
    page('/about')}>About</button>
    <button id="bt2" onClick={()=> page('/project')}>Project</button>
    <button id="bt3" onClick={()=>page('/')}>Home</button>
    </div>
  )
}
export default Contact
