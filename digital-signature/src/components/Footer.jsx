import React from "react"
// import Twitter from "../images/Twitter-Icon.png"
import Facebook from "../images/Facebook-Icon.png"
import Instagram from "../images/Instagram-Icon.png"
import Github from "../images/GitHub-Icon.png" 
import "./Footer.css";
export default function Footer(){
    return(
    <nav className='imgs'>
        <a><img src={Facebook} alt="Facebook Link"/></a>
        <a><img src={Instagram} alt="Instagram Link"/></a>
        <a><img src={Github} alt="Github Link"/></a>
    </nav>    
    )
    
    
}