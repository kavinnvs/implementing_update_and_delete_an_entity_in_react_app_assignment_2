import axios from "axios";

const Item = ({ item, onDelete }) => {
  const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

  // Delete Item
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URI}/${item.id}`);
      onDelete(item.id); // Update the list after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="flex justify-between items-center border p-2 rounded">
      <span className="text-lg font-semibold">{item.name}</span>
      <button
        onClick={handleDelete}
        className="px-3 py-1 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
