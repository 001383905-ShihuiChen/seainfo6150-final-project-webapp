import React, { useState } from "react";
import styles from "./Form.module.css"
import { Link } from "react-router-dom";
const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className={styles.container}>
      {
        submittedForm ? (
          <div>
            <p>Here are the details of your review.</p>
            Your preferred name is <b>{submittedForm.get("name")}</b>.<br />
            Your email address is <b>{submittedForm.get("email")}</b>.<br />
            Your phone number is <b>{submittedForm.get("phone")}</b>.<br />
            What is the subject? <b>{submittedForm.get("subject")}</b>.<br />
            Did you try this recipe?  <b>{submittedForm.get("trying")}</b><br />
            What kind of this recipe? <b>{submittedForm.get("recipe")}</b><br />
            Add more detail<br />
            <b>{submittedForm.get("detail")}</b><br /> <br />
            <Link to="/thankyou">
              <button type="button">Submit</button>
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="nameId">Your preferred name (required):</label><br />
            <input type="text" name="name" id="nameId" required /><br />

            <label htmlFor="emailId">Your email (required):</label><br />
            <input type="email" name="email" id="emailId" placeholder="doudou@example.com" required /><br />

            <label htmlFor="phoneId">Your phone number (required):</label><br />
            <input type="tel" name="phone" id="phoneId" placeholder="123-45-678" placeholder="123-45-678" required /><br />

            <label htmlFor="subjectId">Subject</label><br />
            <select name="subject" id="subjectId">
              <option value="doesnotwork">The recipe does'nt work.</option>
              <option value="notgood">The taste is not good.</option>
              <option value="donotlike">I don't like the recipe</option>
              <option value="both">Both of above</option>
            </select><br />

            <label htmlFor="tryingId">Did you try this recipe?</label><br />
            <select name="trying" id="tryingId">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select><br />

            What kind of this recipe?<br />
            <input type="radio" id="recipeId1" name="category" value="breakfast" />
            <label htmlFor="recipeId1">Breakfast</label><br />
            <input type="radio" id="recipeId2" name="category" value="lunch" />
            <label htmlFor="recipeId2">Lunch</label><br />
            <input type="radio" id="recipeId3" name="category" value="dinner" />
            <label htmlFor="recipeId3">Dinner</label><br />
            <input type="radio" id="recipeId4" name="category" value="drink" />
            <label htmlFor="recipeId4">Drink</label><br />
            <input type="radio" id="recipeId5" name="category" value="desert" />
            <label htmlFor="recipeId5">Desert</label><br />

            <label htmlFor="detailId">More Detail (required, 1500 chars max):</label><br />
            <textarea name="detail" id="detailId" className={styles.reviewTextField} maxLength="1000" required /><br />

            <input type="submit" value="Review your inputs" />
          </form>
        )
      }
    </div>
  )
}

export default Form
