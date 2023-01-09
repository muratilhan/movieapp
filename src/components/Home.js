import React, { useContext, useState } from 'react'
import Slider from './Slider'
import '../styles/home.css'
import Movies from './Movies'
import { Button } from 'react-bootstrap'
import { Context } from '../App'

function Home() {

    const context = useContext(Context)
    const [temp, setTemp] = useState("now_playing")

    const handleChange = (e) => {
      context.setFilteredCurrentMovies(prev => prev.filter(item => item.title.toLowerCase().startsWith(e.target.value.toLowerCase())))
    } 
    const handleClick = (e) => {
      context.setFilteredCurrentMovies(context.currentMovies)
    }

  return (
    <div className='home-container'>
      <div className='home-search'> <input onChange={(e)=>handleChange(e)} type="text" placeholder='search'/><Button onClick={handleClick}>Sil</Button> </div>
        <div className='home-title-container'>
             <h2>Top Rated Movies</h2>
        </div>
        <Slider></Slider>
        <div className="titles">
            {["Now_Playing", "Upcoming", "Popular"].map(item=>(
                <li onClick={()=>setTemp(item.toLowerCase())}> {item} </li>
            ))}
        </div>
        <Movies temp={temp} setTemp={setTemp} />
    </div>
  )
}

export default Home