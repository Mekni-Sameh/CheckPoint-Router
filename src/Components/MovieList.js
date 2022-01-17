import React from 'react'
import MovieCard from './MovieCard';
function MovieList({movieList,search,rating}) {
    
    return (

        
        <div className="movieList">
            {
                movieList.filter((el)=>el.name.toUpperCase().includes(search.toUpperCase().trim())
                && el.rating>= rating)
                .map((el, key)=> <MovieCard key = {el.id} movie = {el}/>)
            }
         
          
            
        </div>
    )
}

export default MovieList
