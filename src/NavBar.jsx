import React from "react"
import './NavBar.css'

export default function NavBar(){
    return(
        <div>
            <nav class="main-nav">
                <ul class="ul-first">
                    <li>TeleStream</li>
                    <li><a href='#'>Browse</a></li>
                </ul>
                <ul class="ul-sec">
                    <li><a href='#'>Log in</a></li>
                    <li><a href='#'>Sign Up</a></li>
                    
                </ul>
            </nav>
        </div>
    )
}