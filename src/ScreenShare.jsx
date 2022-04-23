import React from 'react';
import { useState, useEffect } from "react";

//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
//https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface
//https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
//https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
//https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack

export default function ScreenShare(){

    const [isSharing, setSharing] = useState(false);
    const stream = document.getElementById("video");

    const toggleSharing = async () => {
        if (isSharing != true){
            // attain a media stream object 
            stream.srcObject = await navigator.mediaDevices.getDisplayMedia({video: {cursor: "always"}, audio: true});
            stream.play(); // start screen sharing 
        }
        else{ //end screen sharing 
            //stream.getTracks().stop();
            stream.srcObject = null;
        }
        setSharing(!isSharing);
    };

    return (
        <div>
            <button onClick={toggleSharing}>
                Share Screen
            </button>
            <video id='video' width={'500px'}></video>
       </div>
    )
}