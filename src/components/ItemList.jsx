import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Fetch List Items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URI);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Handle Deletion
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => <Item key={item.id} item={item} onDelete={handleDelete} />)
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
