import React from "react"
import './NavBar.css'
import CreateRoom from "./CreateRoom"

export default function NavBar(){
    return(
        <div className="Header">
            <div className="logo">
                <h1><a href="#">TeleStream</a></h1>
            </div>
            <div className="browse">
                <input type="text"/>
                <button>
                    Search
                </button>
            </div>
            <div className="loginSignup">
                <nav>
                    <ul>
                        <CreateRoom/>
                        <li><a href='#'>Log in</a></li>
                        <li><a href='#'>Sign Up</a></li>

                    </ul>
                </nav>
            </div>

        </div>
        
            
        
    )
}