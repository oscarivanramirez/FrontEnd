import React from "react";
import { useState, useEffect, useRef } from "react";
import './WebcamMain.css'

import Webcam from "react-webcam";

export default function WebcamMain(cameraState){
  const videoConstraints = {
    facingMode: "user" //choosing a camera
  };

  return (
      <div className="relativeWebcam">
            <Webcam class='videoSize' videoConstraints={videoConstraints}/>
      </div>
    );
  };