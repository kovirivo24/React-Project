import React from "react"
import Bryan from "../images/Bryan-digital-signature-photo.jpg"
import "./Info.css";
export default function Info(){
     return(
        <nav className="info">
            <img src={Bryan} alt="Bryan's Portrait" className="info--photo"/>
            <h2 className="info--name"><b>Bryan Cheng</b></h2>
            <h3 className="info--student">3rd Year Aerospace Engineering Student</h3>
            <a href="mailto:c9cheng@ucsd.edu"className="button email">Email</a>
            <a href="https://www.linkedin.com/in/bryan-cheng-cheuk-hin" className="button LinkedIn">LinkedIn</a>
        </nav>
    )
    
    
}