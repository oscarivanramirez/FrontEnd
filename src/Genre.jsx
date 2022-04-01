import React from "react"
import './Genre.css'

export default function Genre({name, viewers, genre}){
    return(
        <>
            <a href="#">
                <div className="gmain">
                    <div className="gside">
                        <div className="gprofile"></div>
                        <span className="guserName">{name}</span>
                        <br/>
                        <span className="gwatchers">{viewers}K viewers</span>
                        <br/>
                        <span className="ggenre">{genre}</span>
                    </div>
                </div>
            </a>
        </>
    )
}