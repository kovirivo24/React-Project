import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Footer from "./components/Footer"
import Interests from "./components/Interests"
import "./App.css";
export default function App(){
    return(
    <div className='background'>
        <div className='card'> 
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
       
    </div>
    )
}