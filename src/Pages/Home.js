import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import { Link } from "react-router-dom"

function Cards({ cards, setCards }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };

  const moviesPerPage = 5;
  const totalPages = Math.ceil(cards.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = cards.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap p-4">
        {currentMovies.map((card) => (
          <div key={card.id} className="card mt-4" style={{ width: "18rem", margin: "1rem" }}>
            <img src={card.imgSrc} className="card-img-top h-50" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title"><b>{card.title}</b></h5>
              <p className="card-text"><b>Des.:</b> {card.text}</p>
              <p className="card-rate"><b>Rating:</b> {card.rate}</p>
              <p className="card-cast"><b>Cast:</b> {card.cast.join(" , ")}</p>
              <button className="btn btn-danger mx-2" onClick={() => handleDelete(card.id)}>
                Delete
              </button>
              <Link to={`/EditMovie/${card.id}`} className="btn btn-secondary mx-2">Edit</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center gap-4">
        <button
          className="btn btn-outline-primary"
          onClick={handlePrev}
          disabled={currentPage === 1}>
          Previous
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={handleNext}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default Cards;
