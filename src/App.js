import React from "react";
import { useState, useEffect } from "react"; // used to fetch data
import axios from "axios"; // used for fetching data from API aswel
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ChatUI from "./ChatUI";
import HomeScreen from "./HomeScreen";
//import LoginSignup from "./LoginSignup";

export default function TeleStreamApp(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/ChatUI/:roomname' element={<ChatUI/>}/>
            </Routes>
        </Router>
        
    )
}
