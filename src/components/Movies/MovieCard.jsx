import React from "react";

function MovieCard({
  poster_path,
  title,
  release_date,
  rating,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchList,
  movie,
}) {
  function isMovieInWatchlist(movie) {
    return watchList.some((m) => m.id === movie.id);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md p-4 m-4 w-64 h-96 hover:scale-110 duration:300">
        <img
          src={poster_path}
          alt="Movie Poster"
          className="w-full h-48 bg-center bg-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">Release Date: {release_date}</p>
        <p className="text-gray-700 mb-2">Rating: {rating}/10</p>

        {isMovieInWatchlist(movie) ? (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => handleRemoveFromWatchlist(movie)}
          >
            Remove from Watchlist
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => handleAddToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
