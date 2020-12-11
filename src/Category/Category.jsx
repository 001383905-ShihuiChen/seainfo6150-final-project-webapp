import React from 'react'
import PropTypes from "prop-types";
import CategoryItem from '../CategoryItem/CategoryItem.jsx';
import breakfastImg from '../images/breakfastImg.jpg';
import lunchImg  from '../images/lunchImg.jpg';
import dinnerImg from '../images/dinnerImg.jpeg';
import drinkImg from '../images/drinkImg.jpg';
import dessertImg from '../images/dessertImg.jpg'
import styles from './Category.module.css'
import Header from "../Header/Header";
const categories = [
  {
    slug:0,
    title: 'breakfast',
    imageURI: breakfastImg,
  },
  {
    slug:1,
    title: 'lunch',
    imageURI: lunchImg,
  },
  {
    slug:2,
    title: 'dinner',
    imageURI: dinnerImg,
  },
  {
    slug:3,
    title: 'drink',
    imageURI: drinkImg,
  },
  {
    slug:4,
    title: 'desert',
    imageURI: dessertImg,
  },
]
const Category = () => {
  return (
    <div>
      <Header/>
      <h3> Home--Category</h3>
      <h1>Category</h1>
      <ul className={styles.categoryContainer}>
            {categories.map((category) => (
                <CategoryItem category={category} key={category.slug} />
            ))}
        </ul>
    </div>
  );
}


export default Category
