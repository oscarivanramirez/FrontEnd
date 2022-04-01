import React, { useState, useEffect } from "react";
import Nav from "../NavBar"
import './HomeScreen.css'
import AR from "../ActiveRoom"
import Genre from "../Genre";
import axios from "axios";
import {Link,useParams} from 'react-router-dom';

import { useSession } from "../UserSession";
//import Chat from './ChatUI'
import Thumbnail from "../Thumbnail";
import flare from '../images/purpleflare.gif';
import purplecity from '../images/purplecity.gif'


export default function HomeScreen(){

    const [rooms, setRooms] = useState(undefined);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(0);
    const session = useSession(); // Has access to the value

    useEffect(() => {
        axios.get('https://swejol.herokuapp.com/rooms/list')
        .then((res) => {
            if(res.data){
                setRooms(res.data);
                console.log(rooms)
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [refresh])
    console.log(rooms);
    return(
        
        <div className="animated-background">
            {/*<img className="homeBackground" src={purplecity} alt="loading..." />*/}

            <Nav/>
            
            <div className="mainContent">
                <img className="mainContentBackground" src={flare} alt="loading..." />
                <Thumbnail/>
            </div>
            <hr className="rounded"/>
            <div className="currRooms">
                
                {
                    
                    rooms && rooms.map((room, index) => (
                    <Link to={`/ChatUI/${room.roomName}`}>
                        <div className={`room${index+1}`}>
                            <AR                                key={`${room}`}
                                roomName={room.roomName}
                                numUsers={room.num_users}
                                genre={room.genre}
                            />
                            {/*<Link to={"/ChatUI"}></Link> */}
                            
                            
                        </div>
                    </Link>
                    
                ))}
            </div>
            <hr className="rounded"/>
            <div className="genres">
                <div className="genre1">
                    <Genre
                        name={'Just Chatting'}
                        viewers={394}
                        genre={'IRL'}
                    />
                </div>
                <div className="genre2">
                    <Genre
                        name={'Fortnite'}
                        viewers={126}
                        genre={'Shooter'}
                    />
                </div>
                <div className="genre3">
                    <Genre
                        name={'Valorant'}
                        viewers={193}
                        genre={'FPS'}
                    />
                </div>
                <div className="genre4">
                    <Genre
                        name={'Elden RIng'}
                        viewers={108}
                        genre={'RPG'}
                    />
                </div>
                <div className="genre5">
                    <Genre
                        name={'Just Chatting'}
                        viewers={394}
                        genre={'IRL'}
                    />
                </div>
                <div className="genre6">
                    <Genre
                        name={'Fortnite'}
                        viewers={126}
                        genre={'Shooter'}
                    />
                </div>
                <div className="genre7">
                    <Genre
                        name={'Valorant'}
                        viewers={193}
                        genre={'FPS'}
                    />
                </div>
                <div className="genre8">
                    <Genre
                        name={'Elden RIng'}
                        viewers={108}
                        genre={'RPG'}
                    />
                </div>
            </div>
        </div>
    
    )
}