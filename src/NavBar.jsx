import React from "react"
import './NavBar.css'
import CreateRoom from "./CreateRoom"
import Popup from "./PopUp";
import axios from "axios";
import { useState,useEffect } from 'react';
import {useSession} from './UserSession'
import wave from './images/purplewave.gif';


export default function NavBar(){
    
    const [loginState, setLoginState] = useState(false) //to determine if pop up to create a room is showing or not
    const [signUpState, setSignUpState] = useState(false)
    const session=useSession();
    
    const toggleLoginPopUp = () => {
        setLoginState(!loginState);
    }

    const toggleSignUpPopUp = () => {
        setSignUpState(!signUpState);
    }

    /*New User*/
    const [newUser, setNewUser] = useState('');

    const [newPW, setNewPW] = useState('');

    /*SuccessSignUp*/
    //const [signupSuccess, setSignupSuccess] = useState('')

    const handleCreateUser = () =>{
        axios.post(`users/create/${newUser}/${newPW}`)
            .then((res) => {
                console.log(res);
                //setRefresh(refresh + 1);
                session.dispatch(`${newUser}`);
                setNewUser('');
                setNewPW('');
                //setSignupSuccess(`congrats ${newUser} On Signing Up`);
                setSignUpState(!signUpState);
            })
            .catch((err) =>{
                console.log(err)
                //setError(err.toString())
            })
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
                        <li>
                            <CreateRoom/>
                        </li>
                        
                        <li>
                            <a href='#' onClick={toggleLoginPopUp}>Log in</a>
                            {loginState && 
                            <Popup
                                handleCloseX = {toggleLoginPopUp}
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
                        
                        <li>
                            <a href='#' onClick={toggleSignUpPopUp}>Sign Up</a>
                            {signUpState && 
                            <Popup
                                handleCloseX = {toggleSignUpPopUp}
                                content = { <>
                                    <h3>Sign Up</h3>
                                    <br/>
                                    <input 
                                        value={newUser} 
                                        onChange={(event) => setNewUser(event.target.value)}
                                        placeholder={'Enter a UserName'}/>
                                    <br/>
                                    <input
                                        value={newPW}
                                        onChange={(event) => setNewPW(event.target.value)}
                                        placeholder={'Enter a Unique PassWord'}/>
                                    <br/>
                                    </>
                                }
                                handleCloseS = {handleCreateUser}
                            />}
                        </li>

                    </ul>
                </nav>
            </div>

        </div>
        
    )
}