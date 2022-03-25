import React from "react"
import './ActiveRoom.css'

export default function ActiveRoom({roomName,numUsers, genre}){
    return(
        <>
            <div className="main">
                <div className="content">

                </div>

                <div className="side">
                    <div className="profile"></div>
                    <span className="userName">Streamer name</span>
                    <span className="roomName">{roomName}</span>
                    <span className="watchers">{numUsers} viewers</span>
                    <span className="genre">{genre}</span>
                </div>
            </div>
            
        </>
    )
}