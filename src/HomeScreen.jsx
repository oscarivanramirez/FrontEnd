import React, { useState, useEffect } from "react";
import Nav from "./NavBar"
import './HomeScreen.css'
import AR from "./ActiveRoom"
import axios from "axios";
import {Link,useParams} from 'react-router-dom';

//import Chat from './ChatUI'

export default function HomeScreen(){

    const [rooms, setRooms] = useState(undefined);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(0);

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
            <div className="mainContent">
                
            </div>
            <div className="currRooms">
                {
                    rooms && rooms.map((room, index) => (
                    <Link to={`/ChatUI/${room.roomName}`}>
                        <div className={`room${index+1}`}>
                            <AR 
                                key={`${room}-${index}`}
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