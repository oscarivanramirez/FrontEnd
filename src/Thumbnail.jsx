import React from "react";
import ReactPlayer from "react-player";
import './Thumbnail.css'
import { Carousel } from "3d-react-carousal";

export default function Thumbnail() {

    let slides = [
        <ReactPlayer
            url={"https://youtu.be/hfn0jjy2jI0"}
            volume={0.00}
            playing={true}
        />,
        <ReactPlayer
            url={"https://www.youtube.com/watch?v=_ztLXq5Urx8"}
            volume={0.00}
            playing={true}
        />,
        <ReactPlayer
            url={"https://youtu.be/ar3oTETtAdE"}
            volume={0.00}
            playing={true}
        />
    ]

  return (
    <div>
        <Carousel slides={slides}/>
    </div>  
   
  );
}