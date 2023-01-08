import React from "react"
import Bryan from "../images/Bryan-digital-signature-photo.jpg"
import "./Info.css";
export default function Info(){
     return(
        <nav className="info">
            <img src={Bryan} alt="Bryan's photo" className="info--photo"/>
            <h2 className="info--name"><b>Bryan Cheng</b></h2>
            <h3 className="info--student">3rd Year Aerospace Engineering Student</h3>
            <button className="button--email">Email</button>
            <button className="button--LinkedIn">LinkedIn</button>
        </nav>
    )
    
    
}