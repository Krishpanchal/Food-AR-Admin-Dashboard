import React, { useState } from "react";
import "./modal.css";
import { addFoodItem } from "../../actions/foodItems";

const FoodItemModal = () => {
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foodName", foodName);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("photo", file);

    addFoodItem(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputContainerStyle}>
        <label htmlFor='foodName' style={labelStyle}>
          Food name:
        </label>
        <input
          type='text'
          id='foodName'
          value={foodName}
          onChange={handleFoodNameChange}
          style={inputStyle}
        />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor='category' style={labelStyle}>
          Category:
        </label>
        <input
          type='text'
          id='category'
          value={category}
          onChange={handleCategoryChange}
          style={inputStyle}
        />
      </div>

      <div style={inputContainerStyle}>
        <label htmlFor='description' style={labelStyle}>
          Descrition:
        </label>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={inputContainerStyle}>
        <label htmlFor='filePicker' style={labelStyle}>
          Choose a file:
        </label>
        <input
          type='file'
          id='filePicker'
          onChange={handleFileChange}
          style={inputStyle}
        />
      </div>
      <button type='submit' style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  width: "600px",
};

const inputContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "10px",
  width: "450px",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid gray",
  borderRadius: "5px",
  width: "100%",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
};

export default FoodItemModal;
