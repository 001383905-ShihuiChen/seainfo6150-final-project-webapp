import React from 'react'

import Header from "../Header/Header.jsx"
import styles from "./Submitrequest.module.css"
import Form from "../Form/Form.jsx"
const Submitrequest = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div >
            <h3 > Home--Contact Us--Request</h3>
            <h1>Contact Us</h1>
            <Form/>
            </div>
        </div>
    )
}

export default Submitrequest