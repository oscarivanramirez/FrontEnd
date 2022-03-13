import React, { useState, useEffect } from "react";
import Nav from "../NavBar"
import './HomeScreen.css'
import AR from "../ActiveRoom"
import axios from "axios";
import {Link,useParams} from 'react-router-dom';

import { useSession } from "../UserSession";
//import Chat from './ChatUI'
import Thumbnail from "../Thumbnail";
import flare from '../images/purpleflare.gif';


export default function HomeScreen(){

    const [rooms, setRooms] = useState(undefined);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(0);
    const session = useSession(); // Has access to the value

    useEffect(() => {
        axios.get('/rooms/list')
        .then((res) => {
            if(res.data){
                setRooms(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [refresh])
    
    return(
        
        <div>
            <Nav/>
            
            {session.state}
            
            
            <div className="mainContent">
                <img className="mainContentBackground" src={flare} alt="loading..." />
                <Thumbnail/>
            </div>
            <div className="currRooms">
                
                {
                    rooms && rooms.map((room, index) => (
                    <Link to={`/ChatUI/${room.roomName}`}>
                        <div className={`room${index+1}`}>
                            <AR                                key={`${room}`}
                                roomName={room.roomName}
                                numUsers={room.num_users}
                            />
                            {/*<Link to={"/ChatUI"}></Link> */}
                            
                            
                        </div>
                    </Link>
                        
                    

                    
                ))}
            </div>
            <div className="genres">
                <div className="genre1">
                        lol
                </div>
                <div className="genre2">

                </div>
                <div className="genre3">

                </div>
                <div className="genre4">

                </div>
            </div>
        </div>
    
    )
}