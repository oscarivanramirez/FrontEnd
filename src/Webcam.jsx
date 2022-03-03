import React from "react";
import { useState, useEffect, useRef } from "react";
import './Webcam.css'

export default function Webcam(){
    const videoRef = useRef(null);

    useEffect(() => {
        getVideo();
      }, [videoRef]);

    const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 500 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
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