import React from 'react'
import { useEffect, useState } from 'react';
import recipeImg from "../images/recipeImg.png";
import Header from "../Header/Header";
import styles from "./Aboutus.module.css"

const Aboutus = () => {
    
    return (
        <div className={styles.container}>
            <Header/>

            <h3> Home--About Us</h3>
            <h1>About Us</h1>
            
            <p className = {styles.text}> Hello and welcome to Wonderful Recipes!</p>
            
            <p className = {styles.text}> Thank you so much for stopping by the site! If you are new Wonderfule Recipes, the one thing you should know about us is that we are obesessed with
                creating sratch cooking recipes that you will love.</p>
            <h1> Recipes that work</h1>
            <p className = {styles.text}>There are two things we think about when deciding if a recipe is good enough to go on the site.</p>
            <p className = {styles.text}>First, does it work? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves? </p>
            <p className = {styles.text}>Second, if the dish tastes great, is it worth the effort? Do we want to make it again (and again and again)?</p>
            <p className = {styles.text}>This is what we strive for—recipes you can rely on to work every time and be worth your time, effort, and $$ to make!</p>
            <p className = {styles.text}> Our goal is to encourage people to cook at home, and to make the process of feeding your family and loved ones less intimidating and more enjoyable.</p>
            <p className = {styles.text}>Our recipes are all tested in our own home kitchens, usually several times.</p>
            

        </div>
    )
}

export default Aboutus
