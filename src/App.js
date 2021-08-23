import { useState } from "react";
import Card from "./Card.js";
import bookList from "./BookList";
import "./styles.css";

const App = () => {
  const [genre, setGenre] = useState(["detective", "business", "horror"]);
  const [books, setBooks] = useState([]);
  const clickHandler = (e) => {
    setBooks(bookList[e].items);
  };
  return (
    <div className="App">
      <h1 className="mt-3">📚 Schola-Books 🎓 </h1>
      <div className="container">
        <p className="text-success">Select genre!</p>
        <div className="container">
          {genre.map((item, idx) => (
            <button
              className="btn btn-outline-danger mr-2"
              key={idx}
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        {books.map((book) => (
          <Card
            key={book.id}
            title={book.name}
            imageUrl={book.imageUrl}
            rating={book.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
