import React from "react"
import Nav from "./NavBar"
import './HomeScreen.css'
import AR from "./ActiveRoom"
import Chat from './ChatUI'

export default function HomeScreen(){

    return(
        <div>
            <div class="container">
                <div class="Header">
                    <Nav/>
                </div>
                <div class="Footer">.</div>
                
                <div class="Popular"></div>
                <div class="Recommended">.</div>
                <div class="Genre">.</div>
                <div class="LeftSide">.</div>
                <div class="Rightside">.</div>
            </div>
        </div>
    
    )
}