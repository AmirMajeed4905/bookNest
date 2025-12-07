import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams(); // get book id from route
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBook = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/books/${id}`);
      const data = await res.json();
      if (res.ok) {
        setBook(data);
      } else {
        console.error(data.message || "Book not found");
      }
    } catch (err) {
      console.error("Error fetching book:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (loading) return <p>Loading book...</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    
    <div className="max-w-xl mx-auto mt-6 border p-4 rounded shadow bg-amber-400">
      {book.cover && (
        <img
          src={`http://localhost:5000/uploads/${book.cover}`}
          alt={book.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-2">By {book.author}</p>
      <p className="mb-2">{book.description}</p>
      <p className="font-semibold">${book.price}</p>
    </div>
  );
};

export default SingleBook;
