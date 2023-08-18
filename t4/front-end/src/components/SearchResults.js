import React, { useEffect, useState } from "react";
import "../css/searchResults.css";
import "../css/favorites.css";

const SearchResults = () => {
	// useState states
	const [loading, setLoading] = useState(true); // set boolean to true
	const [searches, setSearches] = useState([]); // array value
	const [favorites, setFavorites] = useState([]); // array value
	// useEffect: allows you to perform side effects in your components
	// url : https://www.w3schools.com/react/react_useeffect.asp#:~:text=The%20useEffect%20Hook%20allows%20you,The%20second%20argument%20is%20optional.
	useEffect(() => {
		async function fetchData() {
			// async function
			try {
				// try and catch block
				const URL = "/searches"; // backend url
				const res = await fetch(URL); // await to fetch url
				const data = await res.json(); // await response from json
				setSearches(data[0].results); // set state to results from the data[0] ([0]:  first result)
				setLoading(false);
			} catch (error) {
				// catches error and logs it in the console
				console.log(error);
				setLoading(false); // if error occurs loading will be set to false
			}
		}
		fetchData(); // call function to run
	}, []); // []: doesnt take in any dependency thus why [] is used

	const handleFavorite = async (e) => {
		// async function
		const favorited = e.target.value; // targets value if a event occurs
		setFavorites([...favorites, favorited]); // spread syntax
		// adds new favorited value to the current usestate thus spread syntax is being used
	};

	const handleUnlike = (e) => {
		const unliked = e.currentTarget.value;
		// targets current value in the favorited in the event of the favorited value is being unliked
		const updatedFavorites = favorites.filter((media) => media !== unliked);
		// updates favorites to remove if unliked
		setFavorites(updatedFavorites);
		// sets state to updated favorites
	};

	return (
		<div data-testid="searchTest">
			<h2 className="search-heading">Search Results:</h2>
			{/*if loading is true or searches is 0 display 'loading..' on the page*/}
			{loading || searches.length === 0 ? (
				<div className="loading">
					<h3>loading..</h3>
				</div>
			) : (
				<div>
					<ul className="list">
						{/*mapping through seraches*/}
						{searches.map((search, index) => (
							<li key={index}>
								<h3>{search.trackName}</h3> {/*display track name*/}
								<h4>{search.artistName}</h4> {/*display artist name*/}
								{/*label input (radio) to favorite a search result*/}
								<label>like</label>
								<input
									type="radio"
									value={search.trackName}
									onClick={handleFavorite}
								></input>
							</li>
						))}
					</ul>
				</div>
			)}
			<div className="favorites-container">
				<h2 className="favorites-heading">Favorites</h2>
				{/*if there is not a favorite display p tag text*/}
				{!favorites.length ? (
					<p>No favorites added</p>
				) : (
					<ul>
						{/*mapping through favorites to display favorites button deletes favorites from the list*/}
						{favorites.map((favorite, index) => (
							<li key={index}>
								<p>
									{favorite}
									<button
										value={favorite}
										onClick={handleUnlike}
									>
										Delete
									</button>
								</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default SearchResults;
