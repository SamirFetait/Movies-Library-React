import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditMovie({ cards, setCards }) {
	const { id } = useParams();
	const navigate = useNavigate();

	const movieToEdit = cards.find((card) => card.id.toString() === id);
	const [movie, setMovie] = useState(movieToEdit ? { ...movieToEdit } : null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMovie({ ...movie, [name]: value });
	};

	const handleSave = () => {
		const updatedCards = cards.map((card) =>
			card.id.toString() === id ? movie : card
		);
		setCards(updatedCards);
		navigate("/");
	};

	if (!movie) return <p>Movie not found</p>;

	return (
		<div className="d-block mx-auto p-4 " style={{ width: "50%" }}>
			<h2 className="mt-5">Edit Movie</h2>
			<label>Title: </label>
			<input
				type="text"
				className="form-control mb-3"
				name="title"
				value={movie.title}
				onChange={handleChange}
				placeholder="Title"
			/>
			<label>Description</label>
			<input
				type="text"
				className="form-control mb-3"
				name="text"
				value={movie.text}
				onChange={handleChange}
				placeholder="Description"
			/>
			<label>Rating: </label>
			<input
				type="text"
				className="form-control mb-3"
				name="rate"
				value={movie.rate}
				onChange={handleChange}
				placeholder="Rating"
			/>
			<label>Cast: </label>
			<input
				type="text"
				className="form-control mb-3"
				name="cast"
				value={movie.cast.join(" , ")}
				onChange={(e) =>
					setMovie({ ...movie, cast: e.target.value.split(",") })
				}
				placeholder="Cast (comma separated)"
			/>
			<label>Image: </label>
			<input
				type="text"
				className="form-control mb-3"
				name="imgSrc"
				value={movie.imgSrc}
				onChange={handleChange}
				placeholder="Image URL"
			/>
			<button className="btn btn-success" onClick={handleSave}>
				Save Changes
			</button>
		</div>
	);
}

export default EditMovie;
