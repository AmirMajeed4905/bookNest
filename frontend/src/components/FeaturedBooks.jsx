// FeaturedBooks.jsx
import React from "react";
import "./FeaturedBooks.css";

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
// Agar book4 aur book5 abhi nahi hain, unko temporarily null ya placeholder set kar do
// import book4 from "./assets/book4.jpg";
// import book5 from "./assets/book5.jpg";

const books = [
  { img: book1, title: "Book One", author: "Author A" },
  { img: book2, title: "Book Two", author: "Author B" },
  { img: book3, title: "Book Three", author: "Author C" },
  { img: book1, title: "Book Four", author: "Author D" }, // placeholder
  { img: book2, title: "Book Five", author: "Author E" }, // placeholder
];

const FeaturedBooks = () => {
  return (
    <section className="featured-books">
      <h2>Popular Books</h2>
      <div className="book-grid">
        {books.map((book, idx) => (
          <div className="book-card" key={idx}>
            {book.img ? (
              <img src={book.img} alt={book.title} />
            ) : (
              <div className="placeholder-img">Coming Soon</div>
            )}
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
