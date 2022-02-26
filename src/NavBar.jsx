import React from "react"
import './NavBar.css'
import CreateRoom from "./CreateRoom"
import Popup from "./PopUp";
import { useState,useEffect } from 'react';

export default function NavBar(){
    
    const [loginState, setLoginState] = useState(false) //to determine if pop up to create a room is showing or not
    const [signUpState, setSignUpState] = useState(false)
    
    const toggleLoginPopUp = () => {
        setLoginState(!loginState);
    }

    const toggleSignUpPopUp = () => {
        setSignUpState(!signUpState);
    }

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
                        <li><a href='#' onClick={toggleLoginPopUp}>Log in</a>
                            {loginState && 
                            <Popup
                                handleClose = {toggleLoginPopUp}
                                content = { <>
                                    <h3>Login</h3>
                                    <input placeholder = 'Username'></input>
                                    <br/>
                                    <input placeholder = 'Password'></input>
                                    <br/>
                                    </>
                                }
                            />}
                        </li>
                        
                        <li><a href='#' onClick={toggleSignUpPopUp}>Sign Up</a>
                            {signUpState && 
                                <Popup
                                    handleClose = {toggleSignUpPopUp}
                                    content = { <>
                                        <h3>Login</h3>
                                        <input placeholder = 'New Username'></input>
                                        <br/>
                                        <input placeholder = 'New Password'></input>
                                        <br/>
                                        </>
                                    }
                            />}
                        </li>

                    </ul>
                </nav>
            </div>

        </div>
        
            
        
    )
}