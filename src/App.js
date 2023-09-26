import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import Mcard from './componenets/Mcard';

const apikey=process.env.REACT_APP_MOVIE_API_KEY;
function App() {
  const [movies,setMovies]=useState([])
  const [search,setSearch]=useState('')
  const movie=async(search)=>{
    const res=await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${search}`)
    const mov= await res.json()
    setMovies(mov.Search)
  }
  console.log(movies)
  useEffect(()=>{movie()
  },[])
  return(
    <div className="page">
      <h1 className="head">Movies/Series Page</h1>
      <div className='input'>
        <input type="text" 
          value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }}/>
        <button className='sea-btn' onClick={()=>movie(search)}> Search</button>
      </div>
        <div className='cards'>
          {movies?.length>0?(
            movies.map((movi)=>(   
              <Mcard 
              movi={movi}/>
              ))
           ):<h2>MOVIE NOT FOUND</h2>
          }
    </div>
    </div>
    
  );
}

export default App;
