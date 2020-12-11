import React, { useEffect, useState } from 'react';
import styles from './RecipeDetail.module.css';
const RecipeDetail = props => {
    return (
      <div className={styles.container}>
          <div className={styles.details}>
          <h2>See what people said</h2>
        <p >
            {props.shortText}
        </p>
          </div>
          <div className={styles.details}>
        
        <h2>Direction</h2>
        <p >
            {props.text}
        </p>
        </div>
      </div>
    );
  };
  
  export default RecipeDetail;