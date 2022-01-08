// Import useState hook
import React, { useState } from "react";
import Button from "../components/button-style";

const Form = ({ initialPost, handleSubmit, buttonLabel, history }) => {

  // Initialize the form 
  const[formData, setFormData] = useState(initialPost);

  // Functions
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  // run when form is submitted
  const handleSubmission = (event) => {
    // prevent form refresh
    event.preventDefault();
    // pass formData to handleSubmit
    handleSubmit(formData);
    // back to main page
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <label for="postname">Habit</label>
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Habit"
      defaultValue={formData.postname}
      name="postname"
      />
      <label for="posttype">Type of Habit</label>
      <input
      type="text"
      onChange={handleChange}
      placeholder="Enter Type of Habit"
      defaultValue={formData.posttype}
      name="posttype"
      />
    <label for="lastCompleted">Last Completed Date</label>
     <input
      type="date"
      onChange={handleChange}
      defaultValue={formData.lastCompeleted}
      name="lastCompleted"
      />
      <input
      type="text"
      onChange={handleChange}
      placeholder="USER_ID(INTERIM)"
      defaultValue={formData.user_id}
      name="user_id"
      />
      <input type="submit" style={Button} value={buttonLabel}  />
      <button style={Button}>Back to all Habits</button>

    </form>
    );
};

export default Form;
