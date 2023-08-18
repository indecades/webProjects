import React, { useState } from "react";
import "../css/search.css";

const Search = () => {
	// useState states
	const [type, setType] = useState("");
	const [search, setSearch] = useState("");
	const [results, setResults] = useState("");

	const handleSubmit = async (e) => {
		// async function
		e.preventDefault(); // prevents page from reloading
		try {
			// try catch block
			const response = await fetch(
				`https://itunes.apple.com/search?term=${search}&media=${type}&limit=10`
			); // fetching api
			const data = await response.json(); // await json response from
			setResults(data.results); // sets state to the results from the data being fetched
			await fetch("/searches/add", {
				// fetches backend data by using a post request
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ results: data.results }),
			});
			setTimeout(() => {
				window.location.reload(); // causes page to reload
			}, 2000);
		} catch (e) {
			console.log(e); // catches errors and logs them in the console
		}
	};

	const handleMediaType = (e) => {
		setType(e.target.value);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value); // sets state to target the (event) search value
	};

	return (
		<div className="search-container">
			<h1 className="main-heading">Itunes API project:</h1>
			{/*if the form is being submit the function will run*/}
			<form onSubmit={handleSubmit}>
				{/*labels contain media types and input = radio button to select media type*/}
				<input
					className="search-input"
					placeholder="Search.."
					onChange={handleSearch}
				></input>
				<div>
					<label>Movie</label>{" "}
					<input
						onClick={handleMediaType}
						value="movie"
						type="radio"
					></input>
				</div>
				<div>
					<label>Podcast</label>{" "}
					<input
						onClick={handleMediaType}
						value="podcast"
						type="radio"
					></input>
				</div>
				<div>
					<label>Music</label>{" "}
					<input
						onClick={handleMediaType}
						value="music"
						type="radio"
					></input>
				</div>
				<div>
					<label>Music Video</label>{" "}
					<input
						onClick={handleMediaType}
						value="musicVideo"
						type="radio"
					></input>
				</div>
				<div>
					<label>Audio Book</label>{" "}
					<input
						onClick={handleMediaType}
						value="audiobook"
						type="radio"
					></input>
				</div>
				<div>
					<label>Short Film</label>{" "}
					<input
						onClick={handleMediaType}
						value="shortFilm"
						type="radio"
					></input>
				</div>
				<div>
					<label>TV Show</label>{" "}
					<input
						onClick={handleMediaType}
						value="tvShow"
						type="radio"
					></input>
				</div>
				<div>
					<label>Software</label>{" "}
					<input
						onClick={handleMediaType}
						value="software"
						type="radio"
					></input>
				</div>
				<div>
					<label>E-Book</label>{" "}
					<input
						onClick={handleMediaType}
						value="ebook"
						type="radio"
					></input>
				</div>
				{/*search button*/}
				<button
					className="search-button"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
