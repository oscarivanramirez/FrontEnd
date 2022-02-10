import React from "react";
import './LoginSignup.css'

export default function LoginSignup(){
    return(
        <div>
            <div>
                <h1>
                    Login
                </h1>
                <h4>
                    Username  
                </h4>
                <input type="text"/>
                <h4>
                    Password
                </h4>
                <input type="text"/>
                <button>
                    Login
                </button>
            </div>
            <div>
                <h1>
                    Sign Up
                </h1>
                <h4>
                    Username  
                </h4>
                <input type="text"/>
                <h4>
                    Date of Birth  
                </h4>
                <input type="text"/>
                <h4>
                    Password
                </h4>
                <input type="text"/>
                <button>
                    Sign Up
                </button>
            </div>
            
        </div>
    )
}