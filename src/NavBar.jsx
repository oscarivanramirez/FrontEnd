import React from "react"
import './NavBar.css'
import CreateRoom from "./CreateRoom"
import Popup from "./PopUp";
import axios from "axios";
import { useState,useEffect } from 'react';
import {useSession} from './UserSession'
import {Link,useParams, useNavigate} from 'react-router-dom';
import purplecity from './images/purplecity.gif';
import { backendurl } from "./config";
import PassWordStrength from "./PasswordStrength";

export default function NavBar(){
    
    const [loginState, setLoginState] = useState(false) //to determine if pop up to create a room is showing or not
    const [signUpState, setSignUpState] = useState(false)
    const session = useSession();
    /* User who already has account*/
    const [user, setUser] = useState('');
    const [PW, setPW] = useState('');
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [roomSearched, setRoom] = useState('');
    const navigate = useNavigate();
    
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
        axios.post(`${backendurl}users/create/${newUser}/${newPW}`)
            .then((res) => {
                console.log(res);
                //setRefresh(refresh + 1);
                session.setSession(res.data[0]);
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

    /*
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
    */

    useEffect(() => {
        const data = localStorage.getItem("SessionInfo");
        session.setSession(JSON.parse(data));
        //console.log(session.name)
    },[])

    useEffect(() => {
        localStorage.setItem("SessionInfo",JSON.stringify(session.name))
    },[session.name])
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
        axios.get(`${backendurl}users/find/${user}/${PW}`)
        .then((res) => {
            console.log(res);
            //console.log(res.data);
            //console.log(res.data[0]);
            //setRefresh(refresh + 1);
            session.setSession(res.data[0]);
            setUser('');
            setPW('');
            //setSignupSuccess(`congrats ${newUser} On Signing Up`);
            setLoginState(!setLoginState);
        })
        .catch((err) =>{
            console.log(err)
            //setError(err.toString())
        })
    }
    
    /*
    useEffect(()=>{
        //console.log(search)
        axios.get(`${backendurl}rooms/${search}/list`)
        .then((res) => {
            if(res.data){
                setRoom(res.data);
                console.log('im looking for',roomSearched)
            }
            
        })
        .catch((err) => {
            console.log(err);
            //setError(err.toString());
        })
    },[search])
    */
    const handleSearch = () =>{
        navigate(`/Search/${search}`)
        console.log("bye")
    }
    

    return(
        <div className="Header">
            <Link to={'/'}>
                <div className="logo">
                    <h1>TeleStream</h1>
                </div>
            </Link>
            
            <div className="browse">
                <input value={search} onChange={(event) => setSearch(event.target.value)} type="text"/>
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="loginSignup">

                <nav>
                    <ul>
                        <CreateRoom/>
                        {
                            session.name.userName ? (
                                <>
                                    <label className="userNameLabel">Hello {session.name.userName} !!</label>
                                    <button onClick={() =>{session.setSession('')}}> Logout </button>
                                </>
                                
                                ):(
                                <>
                                    <li>
                                        <a href='#' className='button' onClick={toggleLoginPopUp}>Log in</a>
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
                                                    type="password"
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
                                        <a href="#" className="button" onClick={toggleSignUpPopUp}>Sign Up</a>
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
                                                    type="password"
                                                    value={newPW}
                                                    onChange={(event) => setNewPW(event.target.value)}

                                                    placeholder={'Enter a Unique PassWord'}/>
                                                <br/>
                                                
                                                <PassWordStrength password={newPW}/>
                                                <br/>
                                                </>
                                            }
                                            handleCloseS = {handleCreateUser}
                                        />}
                                    </li>
                                </>

                                )
                        }

                        {/*<li>
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
                            </li>*/}

                    </ul>
                </nav>

            </div>

        </div>
        
    )
}