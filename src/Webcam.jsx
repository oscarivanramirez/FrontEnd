import React from "react";
import { useState, useEffect, useRef } from "react";
import './Webcam.css'

export default function Webcam(cameraState){
    const videoRef = useRef(null);

    const [webcamOnOff, setOnOff] = useState(false); //

    useEffect(() => {
        getVideo();
      }, [videoRef]);

    const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 400 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
       // if (cameraState){
        video.play();
       // };    
      })
      .catch(err => {
        console.error(err);
      });
  };

    return (
        <div>
            <video class='videoSize' ref={videoRef}/>
        </div>
    );
  };