import React from "react"
import './NavBar.css'
import CreateRoom from "./CreateRoom"
import Popup from "./PopUp";
import axios from "axios";
import { useState,useEffect } from 'react';
import {useSession} from './UserSession'
import purplecity from './images/purplecity.gif';

export default function NavBar(){
    
    const [loginState, setLoginState] = useState(false) //to determine if pop up to create a room is showing or not
    const [signUpState, setSignUpState] = useState(false)
    const session=useSession();
    /* User who already has account*/
    const [user, setUser] = useState('');
    const [PW, setPW] = useState('');
    const [error, setError] = useState('');
    
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

    useEffect(() => {
        axios.get("/users/list")
        .then((res) => {
            if(res.data){
                setUser(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [])
    /*
    useEffect(() => {
        const handleFindUser = () => {
            axios.get(`users/find/${user}/${PW}`)
            .then((res) => {
                console.log(res);
                //setRefresh(refresh + 1);
                session.dispatch(`${user}`);
                setUser('');
                setPW('');
                //setSignupSuccess(`congrats ${newUser} On Signing Up`);
                setLoginState(!signUpState);
            })
            .catch((err) =>{
                console.log(err)
                //setError(err.toString())
            })
        }
    }, [])
    */
    const handleFindUser = () => {
        axios.get(`https://swejol.herokuapp.com/users/find/${user}/${PW}`)
        .then((res) => {
            console.log(res);
            //setRefresh(refresh + 1);
            session.dispatch(`${user}`);
            setUser('');
            setPW('');
            //setSignupSuccess(`congrats ${newUser} On Signing Up`);
            setLoginState(!signUpState);
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
                        <CreateRoom/>
                        
                        <li>
                            <a href='#' onClick={toggleLoginPopUp}>Log in</a>
                            {loginState && 
                            <Popup
                                handleCloseX = {toggleLoginPopUp}
                                content = { <>
                                    <h3>Log in</h3>
                                    <br/>
                                    <input 
                                        value={user} 
                                        onChange={(event) => setUser(event.target.value)}
                                        placeholder={'Enter your UserName'}/>
                                    <br/>
                                    <input
                                        value={PW}
                                        onChange={(event) => setPW(event.target.value)}
                                        placeholder={'Enter your PassWord'}/>
                                    <br/>
                                    </>
                                }
                                handleCloseS={handleFindUser}
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