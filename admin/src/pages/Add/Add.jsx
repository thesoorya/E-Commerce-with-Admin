import React, { useState } from "react";
import "./Add.css";
import img from "../../assets/upload.png";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(null);
  const url = "http://localhost:5000";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("accessories");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/product/add`, formData);

      if (response.data.success) {
        toast.success("Product added successfully");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("accessories");
        setImage(null);
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error("There was an error adding the product!", error);
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add">
        <div className="form-group">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : img}
              alt="Upload Preview"
              className="image-preview"
            />
          </label>
          <input type="file" id="image" hidden onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Product name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Type here"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            value={description}
            placeholder="Write content here"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Product price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            name="price"
            value={price}
            placeholder="₹0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Product category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            name="category"
            value={category}
          >
            <option value="accessories">Accessories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Add;
