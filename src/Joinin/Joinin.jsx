import React from 'react'
import Header from "../Header/Header";
import styles from "./Joinin.module.css";
const Joinin = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <h3> Home--Log In</h3>
            <h1>Log In</h1>
            <br/>
            <br/><br/><br/>
            <form className = {styles.form}>
            <br/>
            <label for="yourusername">Your Username:</label>
            <br/>
            <br/>
            <input type="text" id="yourusername" name="yourusername"></input>
            <br/>
            <br/>
            <label for="password">Password:</label>
            <br/>
            <br/>
            <input type="text" id="subject" name="subject"></input>
            <br/>
            <br/>
            <input type="submit" value = "Log In">
            </input>
            </form>
        </div>
    )
}
export default Joinin;