import React from 'react'
import Form from "../Form/Form";
import waffleImg from "../images/waffleImg.jpg";
import sandwichImg from "../images/sandwichImg.jpg";
import noodleImg from "../images/noodleImg.jpg";
import homeImg from "../images/homeImg.jpg";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import Header from "../Header/Header";






const Home = () => {
    return (
        <div >
            <Header/>
            
            <br></br>
            
            <div >
                <img src={homeImg} alt="home" width ="2000" height="800"/>
                <p className = {styles.text}> Wonderful Recipe Bring You Happy Life!</p>
            </div>

            <h1 className = {styles.text}>Top 3 Recipe</h1>

            <ul className ={styles.list}>
                <li >
                    <img src={waffleImg} alt="waffle" width="600" height="400"/>
                    <p>Top 1: Butter Waffle</p>
                </li>
                <li >
                    <img src={sandwichImg} alt="sandwiches" width="600" height="400"/>
                    <p>Top 2: Chicken Sandwich</p>
                </li>
                <li >
                    <img src={noodleImg} alt="noodle" width="600" height="400"/>
                    <p>Top 3: Italian Noodle</p>
                </li>
            </ul>
        </div>
    )
}

export default Home
