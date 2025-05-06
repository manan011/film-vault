import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import Pagination from './Pagination'

function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchList}) {

  const [movies, setMovies] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const apiKey = import.meta.env.VITE_API_KEY;


  const handlePrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1)
    }
  }

  const handleNext = () => {
    if (pageNum < totalPages) {
      setPageNum(pageNum + 1)
    }
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNum}`)
      .then((response) => {
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [pageNum])

  return (
    <div className='p-4'>
      <div className='text-3xl font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-center mt-4'>
        {movies.map((movie) => {
          return (
            <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            rating={movie.vote_average}
            poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            watchList={watchList}
            movie={movie}
          />
          )
        })}    
      </div>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNum={pageNum} totalPages={totalPages}/>
    </div>
  )
}

export default Movies