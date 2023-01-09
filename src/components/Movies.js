import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../App';
import '../styles/movies.css'

function Movies({temp}) {

    const context = useContext(Context)
    
    useEffect(()=>{
        const fetchDatas = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${temp}?api_key=bedc26d2fa7bfd5fc21f1dccac40a599&language=en-US&page=1`)
            context.setCurrentMovies(res.data.results.slice(0,12))
            context.setFilteredCurrentMovies(res.data.results.slice(0,12))
        }
        fetchDatas();
    },[temp])

  return (
    <div className='movies-container'>
        { context.filteredCurrentMovies && context.filteredCurrentMovies.map(item=>(
            <Link className='movies-inner' to={`/${item.id}`}>
                <div className='movies-inner'>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt="" />
                 </div>
            </Link>
        )) }
    </div>
  )
}

export default Movies