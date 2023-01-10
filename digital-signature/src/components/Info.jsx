import React from "react"
import Bryan from "../images/Bryan-digital-signature-photo.jpg"
import "./Info.css";
export default function Info(){
     return(
        <nav className="info">
            <img src={Bryan} alt="Bryan's photo" className="info--photo"/>
            <h2 className="info--name"><b>Bryan Cheng</b></h2>
            <h3 className="info--student">3rd Year Aerospace Engineering Student</h3>
            <a href="c9cheng@ucsd.edu"><button className="button--email">Email</button></a>
            <a href="www.linkedin.com/in/bryan-cheng-cheuk-hin"><button className="button--LinkedIn">LinkedIn</button></a>
        </nav>
    )
    
    
}