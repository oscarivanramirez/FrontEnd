import React from "react";
import { useState, useEffect } from "react"; // used to fetch data
import axios from "axios"; // used for fetching data from API aswell

import ChatUI from "./ChatUI";
//import HomeScreen from "./HomeScreen";
//import LoginSignup from "./LoginSignup";

export default function TeleStreamApp(){
    return(
        < /*style={{border: '0px solid red', height: '100vh', width: '100vw'}}*/>
            <ChatUI/>
        </>
    )
}
