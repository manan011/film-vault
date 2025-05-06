import React, { useEffect } from "react";
import { useState } from "react";
import genreIds from "../../utility/genre";

function WatchList({ watchList, handleRemoveFromWatchlist }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(watchList);
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleGenreChange = (genre) => {
    setCurrGenre(genre);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    const filtered = watchList.filter((movie) =>
      movie.title.toLowerCase().includes(value)
    );
    setFilteredMovies(filtered);
  };

  const sortRateIncreasing = () => {
    const sortedMovies = [...filteredMovies].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setFilteredMovies(sortedMovies);
  };

  const sortRateDecreasing = () => {
    const sortedMovies = [...filteredMovies].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setFilteredMovies(sortedMovies);
  };

  const sortPopularityIncreasing = () => {
    const sortedMovies = [...filteredMovies].sort(
      (a, b) => a.popularity - b.popularity
    );
    setFilteredMovies(sortedMovies);
  };

  const sortPopularityDecreasing = () => {
    const sortedMovies = [...filteredMovies].sort(
      (a, b) => b.popularity - a.popularity
    );
    setFilteredMovies(sortedMovies);
  };

  // for updating genre list
  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    setGenreList(["All Genres", ...new Set(temp)]);
  }, [watchList]);

  // for updating filtered movies  
  useEffect(() => {
    // Fetch watchlist from local storage or API if needed
    const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
    setFilteredMovies(storedWatchList);
  }, [watchList]);

  return (
    <>
      {/* Genre display */}
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => handleGenreChange(genre)}
              className={
                currGenre === genre
                  ? "h-[3rem] w-[9rem] flex justify-center items-center font-bold text-white rounded-2xl bg-blue-500 mx-2 hover:cursor-pointer"
                  : "h-[3rem] w-[9rem] flex justify-center items-center font-bold text-white rounded-2xl bg-blue-200 mx-2 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* search bar */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          value={inputValue}
          onChange={(e) => handleSearch(e)}
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 rounded-2xl"
        />
      </div>

      {/* table */}
      <div className="border border-gray-200 rounded-lg m-8">
        <table className="w-full text-center">
          <thead className="h-[2rem] font-bold border-b border-black">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center gap-4">
                  <div
                    onClick={sortRateIncreasing}
                    className="hover:cursor-pointer text-xl font-extrabold"
                  >
                    ↑
                  </div>
                  <div>Rating</div>
                  <div
                    onClick={sortRateDecreasing}
                    className="hover:cursor-pointer text-xl font-extrabold"
                  >
                    ↓
                  </div>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center gap-4">
                  <div
                    onClick={sortPopularityIncreasing}
                    className="hover:cursor-pointer text-xl font-extrabold"
                  >
                    ↑
                  </div>
                  <div>Popularity</div>
                  <div
                    onClick={sortPopularityDecreasing}
                    className="hover:cursor-pointer text-xl font-extrabold"
                  >
                    ↓
                  </div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {filteredMovies.filter((movie) => {
              if (currGenre === "All Genres") {
                return true;
              } else {
                return genreIds[movie.genre_ids[0]] === currGenre;
              }
            }).map((movie) => (
              <tr key={movie.id} className="h-[2rem]">
                <td>
                  <div className="flex items-center">
                    <img
                      className="h-[8rem] w-[10rem] m-2"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="No Image"
                    />
                    <p className="mx-8 text-sm">{movie.title}</p>
                  </div>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>{genreIds[movie.genre_ids[0]]}</td>
                <td onClick={() => handleRemoveFromWatchlist(movie)} className="text-red-500 hover:scale-110 duration:300 hover:cursor-pointer hover:text-red-700">
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
