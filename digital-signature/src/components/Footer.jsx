import React from "react"
import Twitter from "../images/Twitter-Icon.png"
import Facebook from "../images/Facebook-Icon.png"
import Instagram from "../images/Instagram-Icon.png"
import Github from "../images/GitHub-Icon.png" 
import "./Footer.css";
export default function Footer(){
    return(
    <nav className='imgs'>
        <img src={Twitter} alt="Twitter Link"/>
        <img src={Facebook} alt="Facebook Link"/>
        <img src={Instagram} alt="Instagram Link"/>
        <img src={Github} alt="Github Link"/>
    </nav>    
    )
    
    
}