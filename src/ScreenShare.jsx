import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import React from 'react';
import { useState, useEffect } from "react";

import IframeScreenshareMin, { initializeScreenShare, requestScreenShare } from 'iframe-screenshare';
import iframeScreenshareMin from 'iframe-screenshare';


export default function ScreenShare(){

    const [isSharing, setSharing] = useState(false);
    const stream = null;

    //const webstoreUrl = 'https://chrome.google.com/webstore/detail/chrome-remote-desktop/inomeogfingihgjfjlpeplalcfajhgai';
    const toggleSharing = () => {
        if (isSharing != true){
            stream = navigator.mediaDevices.getDisplayMedia();
        }
        setSharing(!isSharing);
    };

    //const { initializeScreenShare } = require('iframe-screenshare');
    //const apiKey = "47489311";
    //const sessionId = "1_MX40NzQ4OTMxMX5-MTY1MDY2NTQ5MzgwOH5DSHpCVEc3UDZRL1ZNVWZxY1J0ZGw4QlZ-fg";
    //const token = "T1==cGFydG5lcl9pZD00NzQ4OTMxMSZzaWc9MTc1ZWY1ZWY2YmVkY2E1NjkyMDY1MGU4OGNhOTVkYjg0MGFlMzJjNDpzZXNzaW9uX2lkPTFfTVg0ME56UTRPVE14TVg1LU1UWTFNRFkyTlRRNU16Z3dPSDVEU0hwQ1ZFYzNVRFpSTDFaTlZXWnhZMUowWkd3NFFsWi1mZyZjcmVhdGVfdGltZT0xNjUwNjY1NTY1Jm5vbmNlPTAuOTg2MzQzMjI4MjI2Njk0NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjUzMjU3NTY0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
    
    return (
        <div>
            <button onClick={toggleSharing}>
                Share Screen
            </button>
           
            {/*requestScreenShare() && toggleSharing*/}
            {/*
            <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                <OTPublisher properties={{ videoSource: 'screen', width: 200, height: 200 }}/>
            </OTSession>*/}
       </div>
    )
}