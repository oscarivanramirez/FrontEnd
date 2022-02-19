import React from "react";
import NavBar from "./NavBar";
import { useState,useEffect } from 'react';
import Popup from "./PopUp";
export default function CreateRoom(){

    const [roomName, setRoomName] = useState('') //to retrieve new room name
    const [genre, setGenre] = useState('') //to retrieve genre of new room
    const [state, setState] = useState(false) //to determine if pop up to create a room is showing or not

    const togglePopUp = () => {
        setState(!state);
    }

    return(
        <div>
            <button onClick={togglePopUp}>
                Create Room
            </button>
            {state && 
            <Popup
                
            />}
        </div>
    )
}