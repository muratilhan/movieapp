import './App.css';
import Home from './components/Home';
import Slider from './components/Slider';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieDetail from './pages/MovieDetail';
import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import WatchLater from './pages/WatchLater';

export const Context = createContext()


function App() {

  const [currentMovies, setCurrentMovies] = useState([]);
  const [filteredCurrentMovies, setFilteredCurrentMovies] = useState([]);
  const [watchLaterMovies, setWatchLaterMovies] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Context.Provider value={{currentMovies, setCurrentMovies,filteredCurrentMovies,setFilteredCurrentMovies, watchLaterMovies, setWatchLaterMovies}}>
          
          <Navbar></Navbar>

          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/:id"  element={<MovieDetail/>} />
          <Route path="/watchlater"  element={<WatchLater/>} />
        </Routes>


        </Context.Provider>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
