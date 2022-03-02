import React from "react";
import { useState, useEffect } from "react"; // used to fetch data
import axios from "axios"; // used for fetching data from API aswel
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ChatUI from "./ChatUI";
<<<<<<< HEAD
//import HomeScreen from "./HomeScreen";
=======
import HomeScreen from "./HomeScreen";
>>>>>>> eef8225b52361716f5f06933621bebc9f1c172a1
//import LoginSignup from "./LoginSignup";

export default function TeleStreamApp(){
    return(
<<<<<<< HEAD
        < /*style={{border: '0px solid red', height: '100vh', width: '100vw'}}*/>
            <ChatUI/>
        </>
=======
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/ChatUI/:roomname' element={<ChatUI/>}/>
            </Routes>
        </Router>
        
>>>>>>> eef8225b52361716f5f06933621bebc9f1c172a1
    )
}
