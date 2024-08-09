import React from "react";
import { FaTrash } from "react-icons/fa";
import "./ListItems.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListItems = ({ name, description, price, category, id, url }) => {
  const navigate = useNavigate();

  const onDelete = async (id) => {
    try {
      if (!id) {
        console.error("No ID provided for deletion");
        return;
      }

      await axios.delete(`${url}/api/product/remove/${id}`);
      confirm("Are you sure you want to delete the product?");
      navigate("/add");
      toast.success("Product deleted");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
    }
  };

  return (
    <div className="product-box">
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ₹{price}</p>
        <p>Category: {category}</p>
        <small style={{ color: "#aaa" }}>{id}</small>
      </div>
      <div className="product-actions">
        <FaTrash
          className="icon"
          onClick={() => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default ListItems;
