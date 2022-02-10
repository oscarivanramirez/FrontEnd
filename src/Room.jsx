
import React from "react";
import { useEffect } from "react";

export default function Room({roomName, numUsers}){ //props){

    const someObject = {name: "Lenny", school: "NYU"}; // structuring the object
    const {name, school} = someObject; // destructuring an object
    /*
    useEffect(() => { // used to fetch data

    }, [])
    */

    return(
        <div style={{border: '1px solid black', display: 'flex'}}>
           <h6>Room</h6>
           <h1>Room Name: {roomName}</h1>
           <p>Number of Users: {numUsers}</p>

           <div>
               {name},{school}
           </div>
        </div>

    )
}
