import React from 'react';
import Nav from "./NavBar"
import { Carousel } from "3d-react-carousal";
import ReactPlayer from "react-player";
import Genre from './Genre';
import HomeScreen from './Links/HomeScreen';
import {useParams} from 'react-router-dom';
import './Directory.css'

export default function Directory(){

    let {genre} = useParams();

    let slides = [
        <div>
            
        </div>
    ]
    
    return(
        <div className="genre-animated-background">
            <Nav/>
            <h1 class='genreName'>{genre}</h1>
            <Carousel slides={slides} arrows={true}/>
        </div>
    )
}
