import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import '../styles/watchlater.css'

function WatchLater() {

    const context = useContext(Context)
    
    const handleClick = (item2) => {
      context.setWatchLaterMovies( prev => prev.filter(item => item !== item2) )
    }

  return (
    <div className='watchlater-container'>
        <h2>Watch Later...</h2>
        <div className="watchlater-movies">
        { context.watchLaterMovies.map(item => (
        <Link to={`/${item.id}`} className='watchlater-inner'>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt="" />
            <div className='watchlater-text'>
               {console.log(item)} 
                <h4> {item.title} </h4>
                <p> {item.overview} </p>
                <p><span>Date:</span>  {item.release_date} </p>  
                <p><span>Rating:</span>  {item.vote_average} </p>
                <Button onClick={()=>handleClick(item)} variant='danger'>Çıkar</Button>
            </div>
        </Link>
        ))}
        </div>
        
    </div>
  )
}

export default WatchLater