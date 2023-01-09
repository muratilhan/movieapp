import { Button } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../App'
import '../styles/moviedetail.css'

function MovieDetail() {

    let location = useLocation();
    let category_id = location.pathname.split("/")[1]

    const context = useContext(Context)
    const [currentMovie, setCurrentMovie] = useState();


    useEffect(()=>{
        setCurrentMovie(context.currentMovies.find(item => Number(category_id) === Number(item.id)))
       
    },[category_id, context, currentMovie, location.pathname])
    
    useEffect(()=>{
        console.log(context.watchLaterMovies)
    },[context])

    const handleClick = (numb) => {
      
        if(numb === 1){
            context.setWatchLaterMovies(prev => [...prev, currentMovie])
            console.log("eklendi")
        }else{
            context.setWatchLaterMovies(prev => prev.filter(item => item !== currentMovie))
            console.log("çıkarıldı")

        }
    }

    const isExists = () => {
        const ifExists = context.watchLaterMovies.find(item => item === currentMovie )
        return ifExists ? true : false
    }

  return (
    <div className='movie-detail-container'>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${currentMovie?.poster_path}`} alt="" />
        <div className='movie-detail-info'>
            <h2> <span>{currentMovie?.title}</span> <span> { !isExists() ? <Button onClick={()=>handleClick(1)}>Fav Ekle</Button> : <Button onClick={()=>handleClick(2)} > Fav Çıkar </Button> } </span> </h2>
            <div className='movie-detail-status'>
                <li><span>Date: </span>{currentMovie?.release_date}</li>
                <li><span>Rating:</span> {currentMovie?.vote_average}</li>
                <li><span>Popularite:</span> {currentMovie?.popularity}</li>
            </div>
            <p><span>About Movie: </span>{currentMovie?.overview} </p>
            <div className='button'>
            <Link to="/"><Button variant='success'>Back</Button></Link>
            </div>
        </div> 
    </div>
  )
}

export default MovieDetail