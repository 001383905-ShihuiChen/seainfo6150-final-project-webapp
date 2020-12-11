import React from 'react'

import { Switch, Route, Link } from "react-router-dom";
import Submitrequest from "../Submit/Submitrequest.jsx";
import Header from "../Header/Header";
import styles from "./Contactus.module.css"

const Contactus = () => {
    return (
        
        <div className = {styles.container}>
            
            <Header/>
            
            <h3> Home--Contact Us</h3>
            <h1>Contact Us</h1>
            <br /><br />
            <br /><br />
            
            <div >
            <ul className = {styles.text}>
                <li className = {styles.text}>Call Us: 1234567890</li>
                <li className = {styles.text}>Email Us: abc@gmail.com</li>
                <li className = {styles.text}>Submit a Request
                    <Link to="/contactus/submitrequest">Submit a Request</Link>
                    
                </li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
           

        </div>
        
    
    )
}

export default Contactus