import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../styles/slider.css'

function Slider() {

    const [topMovies, setTopMovies] = useState([])

    useEffect(()=>{
        const fetchDatas = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=bedc26d2fa7bfd5fc21f1dccac40a599&language=en-US&page=1")
            setTopMovies(res.data.results)
        }
        fetchDatas();
    },[topMovies])

  return (
    <Carousel className='slider-container'>
      { topMovies.map(item=>(
        
        <Carousel.Item className='slider-item'>
            <div className='slider-item-inner'>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt="" />
            </div>
        </Carousel.Item>
        
      )) }
    </Carousel>
  )
}

export default Slider