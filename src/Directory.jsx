import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./NavBar"
import { Carousel } from "3d-react-carousal";
import ReactPlayer from "react-player";
import Genre from './Genre';
import HomeScreen from './Links/HomeScreen';
import {Link,useParams, useNavigate} from 'react-router-dom';
import AR from "./ActiveRoom"
import './Directory.css'

export default function Directory(){

    const GENRES = ['Games','IRL','Music','Esports','Creative']
    let {genre} = useParams();
    const [error, setError] = useState('');
    const [rooms, setRooms] = useState(undefined);
    const navigate = useNavigate();
    //const [currgenre, setGenre] = useState(undefined);
    
    //setGenre({genre});
    /*
    useEffect(() => {
        setGenre({genre});
    })
    */
    useEffect(() => {
        axios.get(`https://swejol.herokuapp.com/rooms/list/${genre}`)
        .then((res) => {
            if(res.data){
                setRooms(res.data);
                console.log(rooms)
            }
        })
        .catch((err) => {
            console.log(err);
            //setError(err.toString());
        })
    }, [genre])//[currgenre]
    
    const PrevGenre = () => {
        console.log(GENRES[0]);
        console.log({genre}.genre);
        if(GENRES[0]==={genre}.genre){
            navigate(`/Directory/${GENRES[4]}`)  
        }
        else{
            var i=1;
            var done=false;
            while(i<GENRES.length && !done)
            {
                console.log(GENRES[i]);
                console.log({genre}.genre);
                if(GENRES[i]==={genre}.genre)
                {
                    console.log(GENRES[i-1]);
                    navigate(`/Directory/${GENRES[i-1]}`);
                    done=true;
                }
                i++;
            }
        }
        
        /*
        axios.get(`https://swejol.herokuapp.com/rooms/list/${prevgenre}`)
        .then((res) => {
            if(res.data){
                setRooms(res.data);
                console.log(rooms)
            }
        })
        .catch((err) => {
            console.log(err);
            //setError(err.toString());
        })
        */
    }
    const NextGenre = () => {
        console.log(GENRES[0]);
        console.log({genre}.genre);
        if(GENRES[4]==={genre}.genre){
            navigate(`/Directory/${GENRES[0]}`)  
        }
        else{
            var i=0;
            var done=false;
            while(i<GENRES.length-1 && !done)
            {
                console.log(GENRES[i]);
                console.log({genre}.genre);
                if(GENRES[i]==={genre}.genre)
                {
                    console.log(GENRES[i+1]);
                    navigate(`/Directory/${GENRES[i+1]}`);
                    done=true;
                }
                i++;
            }
        }
    }


    return(
            <div>
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
                                    
                                    
                                    
                                </div>
                            </Link>
                            
                        ))
    
                    
                    }
                    
                </div>
            </div>
    
        )   
             
    

}
