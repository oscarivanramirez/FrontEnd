import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import Nav from "./NavBar"
import AR from "./ActiveRoom"
import { backendurl } from "./config";

export default function Search(){

    let {roomSearched} = useParams();//literal room name
    console.log("{}",{roomSearched})
    const [room, setRoom] = useState('');
    const [rName, setRName] = useState('');

    useEffect(()=>{
        console.log("plsss",roomSearched)
        axios.get(`${backendurl}rooms/${roomSearched}/list`)
        .then((res) => {
            if(res.data){
                setRoom(res.data);
                /*
                console.log("rS",{roomSearched})
                console.log("hello");
                console.log("before");
                console.log(room);
                console.log(room[0]);
                console.log(room[0].roomName);
                */
                
            }
            else{
                setRoom(null);
            }
            //console.log('useEffect: room',room[0].roomName)
        })
        .catch((err) => {
            console.log(err);
            //setError(err.toString());
        })
    },[roomSearched])
    console.log("after")
    console.log(room);
    console.log(room[0]);
    //console.log(room[0].roomName);
    return(
        <div>
            <Nav/>
            {
                
                room[0]!==null ? (
                    <div>
                    {
                        
                        room && room.map((r, index) => (
                        <Link to={`/ChatUI/${r.roomName}`}>
                            <div className={`room${index+1}`}>
                                <AR                                key={`${room}`}
                                    roomStreamer={r.createrName}
                                    roomName={r.roomName}
                                    numUsers={r.num_users}
                                    genre={r.genre}
                                />
                                
                                
                                
                            </div>
                        </Link>
                    
                    ))}
                        
                    </div>
                ):(
                    <div>
                        <h1>Sorry, could not find the chatroom.</h1>
                    </div>
                )


                }
            
        </div>
    )
}