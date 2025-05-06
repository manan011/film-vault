import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies/Movies";
import Banner from "./components/Movies/Banner";
import WatchList from "./components/WatchList/WatchList";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchlist = (movie) => {
    let newWatchList = [...watchList, movie];
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let handleRemoveFromWatchlist = (movie) => {
    let filteredWatchList = watchList.filter((m) => m.id !== movie.id);
    localStorage.setItem("watchList", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  }

  useEffect(() => {
    let watchListFromLocalStorage = localStorage.getItem("watchList");
    if (watchListFromLocalStorage) {
      setWatchList(JSON.parse(watchListFromLocalStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
            <>
              <Banner />
              <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchList={watchList}/>
            </>
          }
        />
        <Route path="/watchlist" element={<WatchList watchList={watchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;