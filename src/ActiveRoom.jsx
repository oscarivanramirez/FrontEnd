import React from "react"

export default function ActiveRoom({roomName,numUsers}){
    return(
        <>
            <h1>{roomName}</h1>
            <h3>{numUsers}</h3>
            <h2>Streamer name</h2>
        </>
    )
}