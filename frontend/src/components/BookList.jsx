import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books", {
        method: "GET",
        credentials: "include" // ✅ include cookies
      });

      const data = await res.json();
      if (res.ok) {
        setBooks(data.books || []); // backend returns books array
      } else {
        console.error(data.message || "Failed to fetch books");
      }
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <h1 className="text-center text-amber-600">  Loading books...</h1>;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-7">Feature Books </h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <Link
              to={`/books/${book._id}`}
              key={book._id}
              className="bg-amber-500 border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              {book.cover && (
                <img
                  src={`http://localhost:5000/uploads/${book.cover}`}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">By {book.author}</p>
              <p className="mt-2">{book.description}</p>
              <p className="mt-1 font-semibold">${book.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
