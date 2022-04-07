import React from "react"
import './Genre.css'

export default function Genre({name, viewers}){
    return(
        <>
            <div className="gmain">
                

                <div className="gside">
                    <div className="gprofile"></div>
                    <span className="guserName">{name}</span>
                    <br/>
                    <span className="gwatchers">{viewers}K viewers</span>
                </div>
            </div>
        </>
    )
}