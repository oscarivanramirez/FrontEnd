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

import ScreenShare from "../ScreenShare";

import { Carousel } from "3d-react-carousal";

export default function HomeScreen(){

    const GENRES = ['Games','IRL','Music','Esports','Creative']
    const [rooms, setRooms] = useState(undefined);
    const [error, setError] = useState('');
    const [refresh, setRefresh] = useState(0);
    const session = useSession(); // Has access to the value

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios.get('https://swejol.herokuapp.com/rooms/list')
        .then((res) => {
            if(res.data){
                setRooms(res.data);
                console.log(rooms);
                setSlides([
                    <div className="currRooms">   
                        <Link to={`/ChatUI/${rooms[0].roomName}`}>
                            <div className="room1">
                                <AR      key={`${rooms[0]}`}                  
                                    roomStreamer={rooms[0].createrName}
                                    roomName={rooms[0].roomName}
                                    numUsers={rooms[0].num_users}
                                    genre={rooms[0].genre}
                                />
                                {/*<Link to={"/ChatUI"}></Link> */}
                                
                                
                            </div>
                        </Link>
                    </div>
                ]);
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.toString());
            
        });
        
    }, [refresh])

    console.log(rooms);

    
    return(
        
        <div className="animated-background">
            {/*<img className="homeBackground" src={purplecity} alt="loading..." />*/}

            <Nav/>
            {
            <div className="mainContent">
                <img className="mainContentBackground" src={flare} alt="loading..." />
                <div className="contentWrapper">
                    <Carousel slides={slides} arrows={true}/>
                </div>  
            </div>}
            <hr className="rounded"/>
            <div className="currRooms">
                
                {
                    
                    rooms && rooms.map((room, index) => (
                    <Link to={`/ChatUI/${room.roomName}`}>
                        <div className={`room${index+1}`}>
                            <AR                                key={`${room}`}
                                roomStreamer={room.createrName}
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
                {
                    GENRES.map((genre, index) => (
                        <Link to={`/Directory/${genre}`}>
                            <div className={`genre${index+1}`}>
                            <Genre
                                name={genre}
                                viewers={0}
                            />
                            </div>

                        </Link>
                    ))


                }
                
                
            </div>
            {/*temp screen sharing in home page for now*/}

        </div>
    
    )
}