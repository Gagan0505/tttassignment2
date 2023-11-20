import React from "react";
import './buttons.css'

export default function Buttons(props){
    return(
        <div className="btn-container">
            <button><b>{props.Count}</b></button>
            <label>{props.title}</label>
        </div>
    );
}