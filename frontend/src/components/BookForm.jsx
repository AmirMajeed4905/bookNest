import { useState } from "react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: ""
  });
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setCover(e.target.files[0]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("description", formData.description);
    data.append("price", formData.price);
    if (cover) data.append("cover", cover);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        body: data,
        credentials: "include" // ✅ important: sends cookie
      });

      const result = await res.json();
      console.log("📦 Added Book:", result);

      if (res.ok) {
        alert("Book added successfully!");
        setFormData({ title: "", author: "", description: "", price: "" });
        setCover(null);
      } else {
        alert(result.message || "Failed to add book");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />

        <label>Author</label>
        <input
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <label>Price</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-3"
        />

        <label>Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border p-2 mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded mt-3"
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
