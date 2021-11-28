import React from 'react'
import Namaskar from './Namaskar.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home(props) {
    return (
        <>
            <div className={`text-${props.textmode==='light'?'dark':'light'} mb-3`}>
            <h1>WECOME TO SANDY-TEXTUTILS</h1>
            <h3>Fast, reliable, and easy! Text-Utils brings several free online tools to assist developers in daily tasks.</h3>
            <div className="mainContent">
                <img src={Namaskar} alt="..." />
            </div>
            <div className="about">
                <div className="btn btn-success mt-2"><Link className="nav-link text-light" to="/textarea">Click Here..</Link></div>
                <h1>This is the app for playing lots of the works like, convert upper case to the words, 
                    convert lower case to the words, and many more.
                </h1>
            </div>
            </div>
            
            
        </>
    )
}
