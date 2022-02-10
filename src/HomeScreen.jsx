import React from "react"
import Nav from "./NavBar"
import './HomeScreen.css'
import AR from "./ActiveRoom"
//import Chat from './ChatUI'

export default function HomeScreen(){

    return(
        <div>
            <Nav/>
            <div className="mainContent">

            </div>
            <div className="currRooms">
                <div class="room1">
                    <AR/>
                </div>
                <div class="room2">
                    <AR/>
                </div>
                <div class="room3">
                    <AR/>
                </div>
                <div class="room4">
                    <AR/>
                </div>
                <div class="room5">
                    <AR/>
                </div>
            </div>
            <div className="genres">
                <div class="genre1">

                </div>
                <div class="genre2">

                </div>
                <div class="genre3">

                </div>
                <div class="genre4">

                </div>
            </div>
        </div>
    
    )
}