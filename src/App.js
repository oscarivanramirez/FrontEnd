import React from "react";
import { useState, useEffect } from "react"; // used to fetch data
import axios from "axios"; // used for fetching data from API aswell

import ChatUI from "./ChatUI";

export default function TeleStreamApp(){
    return(
        <div style={{border: '0px solid red', height: '100vh', width: '100vw'}}>
            <ChatUI/>
        </div>
    )
}
