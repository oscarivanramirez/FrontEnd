import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./NavBar"
import { Carousel } from "3d-react-carousal";
import ReactPlayer from "react-player";
import Genre from './Genre';
import HomeScreen from './Links/HomeScreen';
import {Link,useParams} from 'react-router-dom';
import AR from "./ActiveRoom"
import './Directory.css'

export default function Directory(){

    const GENRES = ['Games','IRL','Music','Esports','Creative']
    let {genre} = useParams();
    const [error, setError] = useState('');
    const [rooms, setRooms] = useState(undefined);
    const [currgenre, setGenre] = useState(undefined);
    setGenre({genre});

    let slides = [
        <div> </div>
    ]
    useEffect(() => {
        axios.get(`https://swejol.herokuapp.com/rooms/list/${currgenre}`)
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
    }, [currgenre])
    
    const PrevGenre = () => {

    }
    const NextGenre = () => {
        
    }


    return(
        <div className="genre-animated-background">
            <Nav/>
            <button onClick={PrevGenre}>Left</button>
            <h1>{genre}</h1>
            <button onClick={NextGenre}>Right</button>
            <div class="genresCarousel">
                {
                    rooms && rooms.map((room, index) => (
                        <Link to={`/ChatUI/${room.roomName}`}>
                            <div className={`gc${index+1}`}>
                                <AR                                key={`${room}`}
                                    roomStreamer={room.createrName}
                                    roomName={room.roomName}
                                    numUsers={room.num_users}
                                    
                                />
                                {/*<Link to={"/ChatUI"}></Link> */}
                                
                                
                            </div>
                        </Link>
                        
                    ))


                }
                {/*
                <div class="gc1"></div>
                <div class="gc2"></div>
                <div class="gc3"></div>
                <div class="gc4"></div>
                <div class="gc5"></div>
                <div class="gc6"></div>
                <div class="gc7"></div>
                <div class="gc8"></div>
                <div class="gc9"></div>
                <div class="gc10"></div>
                <div class="gc11"></div>
                <div class="gc12"></div>
                */}
            </div>
        </div>
    )
}
