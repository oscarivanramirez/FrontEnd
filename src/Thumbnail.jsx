import React from "react";
import ReactPlayer from "react-player";
import './Thumbnail.css'
import { Carousel } from "3d-react-carousal";

export default function Thumbnail() {

    let slides = [
        <ReactPlayer 
            className = {"reactPlayer"}
            url={"https://youtu.be/hfn0jjy2jI0"}
            volume={0.00}
            playing={true}
            height={"45.6vh"}
            width={"80.6vh"}
        />,
        <ReactPlayer
            className = {"reactPlayer"}
            url={"https://www.youtube.com/watch?v=_ztLXq5Urx8"}
            volume={0.00}
            playing={true}
            height={"45.6vh"}
            width={"80.6vh"}
        />,
        <ReactPlayer
            className = {"reactPlayer"}
            url={"https://youtu.be/ar3oTETtAdE"}
            volume={0.00}
            playing={true}
            height={"45.6vh"}
            width={"80.6vh"}
        />,
        <ReactPlayer 
        className = {"reactPlayer"}
        url={"https://youtu.be/WJw_PtZpnnQ"}
        volume={0.00}
        playing={true}
        height={"45.6vh"}
        width={"80.6vh"}
        />,
        <ReactPlayer 
        className = {"reactPlayer"}
        url={" https://youtu.be/TEwuxri8XJQ"}
        volume={0.00}
        playing={true}
        height={"45.6vh"}
        width={"80.6vh"}
         />
    ]

  return (
    <div className="contentWrapper">
        <Carousel slides={slides} arrows={true}/>
    </div>  
   
  );
}