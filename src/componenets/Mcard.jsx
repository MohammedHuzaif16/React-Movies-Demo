import React from "react";
import '../App.css'

export default function Mcard({movi}){
    return(
        <div className="card1">
            <div className="img">
                <img src={movi.Poster !='N/A'?movi.Poster:'https://viaa.placeholder.com/400'} alt={movi.Title} />
            </div>
            <div className="text">
                <span>{movi.Year}</span> <span>{movi.Type}</span>
                <h3>{movi.Title}</h3>
            </div>
        </div>
    );
}