import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "JavaScript ,The Good Parts", rating: "4/5" },
    { name: "JavaScript ,The Definitive Guide", rating: "4/5" },
    { name: "Secrets of the JavaScript Ninja", rating: "4/5" },
    { name: "JavaScript Allongé", rating: "4.5/5" },
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "To Kill a Mockingbird",
      rating: "4.5/5"
    },
    {
      name: "The Great Gatsby",
      rating: "4/5"
    },
    {
      name: "1984",
      rating: "4/5"
    },
    {
      name: "Pride and Prejudice",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      rating: "4.5/5"
    },
    {
      name: "Educated: A Memoir",
      rating: "4/5"
    },
    {
      name: "The Immortal Life of Henrietta Lacks",
      rating: "4.5/5"
    },
    {
      name: "Becoming",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> GoodBooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
       
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
