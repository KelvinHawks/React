import React from "react"

import LogoIcon from "../img/logo.svg"
export default function Navbar(){
    return(
        <nav className="nav-bar">
            <img src={LogoIcon} className="icon" alt="Logo"/>
            <h3 className="Nav-logo-text">ReactFacts</h3>
            <h4 className="nav-logo-course">React Course - Project 1</h4>
        </nav> 
    )
}