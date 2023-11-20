import React from "react";
import logo from "../../images/ttt_logo.png";
import './navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar-container">
            <div className="left-Container">
                <div className="img-container">
                 <img src={logo} className="logo" alt="ttt_logo"/>
                </div>
                <div className="line-yll">
                 </div>
                <h2>STORIES</h2>
            </div>
            <div className="course-btn">
                <button>Courses</button>
            </div>
        </nav>
    );
}