import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from './movie'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
    
        axios.get(`http://localhost:8081/pokemons`, {
  
        })
          .then( (response) => {
            setIsLoading(false);
            setMovies(response?.data);
          })
          .catch( (error) => {
            setIsLoading(false);
            console.log(error);
          })
      }, [])
    
      return (
          <div className="flex flex-wrap -mb-4">
            {!isLoading && movies?.length ? movies.map( (movie, index) =>  <Pokemon key={movie?.id ?? index} pokemon={movie}/>) : <h2>Loading...</h2>}
          </div>
      )
}

export default Movies