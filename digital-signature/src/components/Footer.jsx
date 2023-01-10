import React from "react"
// import Twitter from "../images/Twitter-Icon.png"
import Facebook from "../images/Facebook-Icon.png"
import Instagram from "../images/Instagram-Icon.png"
import Github from "../images/GitHub-Icon.png" 
import "./Footer.css";
export default function Footer(){
    return(
    <nav className='socials'>
        <a href="https://www.facebook.com/cheng.bryan.9/"><img src={Facebook} alt="Facebook Link"/></a>
        <a href="https://www.instagram.com/_bragor77_/"><img src={Instagram} alt="Instagram Link"/></a>
        <a href="https://github.com/bragor77"><img src={Github} alt="Github Link"/></a>
    </nav>    
    )
    
    
}