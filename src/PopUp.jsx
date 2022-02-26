import React from "react";
import './PopUp.css'

export default function Popup({content, handleClose}){
    return (
        <div className = "modal">
            <div className="modelContent">
                <button onClick = {handleClose}>x</button>
                {content}
                <button onClick ={handleClose}>Submit</button>
            </div>
            
        </div>
    );
};
 
