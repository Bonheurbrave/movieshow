import React, { useEffect, useState } from 'react'
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";

function Homepages({searchvalue , setsearchvalue}) {
    const [movies ,setmovies ] = useState([]);
    const [page , setpage] = useState(1)
    const handlenextpage = ()=>{
        setpage(page+1);
    }
    const handlepreviuspage = ()=>{
     if(page >=2){
        setpage(page -1)
     }
     console.log(page)
    }
    const getMovies=  async()=>{
          await fetch("https://api.themoviedb.org/3/discover/movie?api_key=6cf6d6fdffe0ca8d35a81e85a4543d6d&page="+page)
          .then(res=>res.json())
          .then((data)=>{
            console.log(data)
               setmovies(data.results)
     
            });
            
    }
 
    const handleshowoverview = (e)=>{
       alert(e);
    }

    useEffect(()=>{
          getMovies();
    } , [handlenextpage])
    
  return (
    <div>
        <div className=' flex justify-around py-1 bg-slate-950 w-screen'>
            
        <button onClick={handlepreviuspage} className=' flex py-2 text-white px-7 '> <TbPlayerTrackPrev className='' size={24}/> Previous page</button>
        <h1 className=' py-2 text-white px-5 border-2 border-slate-300 rounded-md'>Page Number : {page}</h1>
        <button onClick={handlenextpage} className=' flex py-2 text-white px-7'>Next page<TbPlayerTrackNext className='' size={24}/></button>

        </div>
      <div className=' grid max-sm:grid-cols-1 grid-cols-4 py-4'>
        {movies.map((movies)=>{
            return (
                <div className=" ml-4 rounded-md py-4 relative">
                    <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="no internet connection" className=' rounded-md'/>
                    <div className=' py-4 absolute bottom-4 rounded-b-md transback'>
                    <h1 className='font-extrabold text-white text-2xl text-center'>{movies.title}</h1>
                    <h1 className=' font-semibold text-slate-400 px-3'>Release_date : {movies.release_date}</h1>
                    <h1 className='font-semibold text-slate-400 px-3 mb-1'>popularity : {movies.popularity}</h1>
                    <button className=' px-3 text-center text-white ml-3 bg-red-600 rounded-md' onClick={()=>handleshowoverview(movies.overview)}>Overview</button>
                    </div>
                </div>
            )
        })}
      </div>

      <div className=' flex justify-around py-4 bg-slate-950'>
      <button onClick={handlepreviuspage} className=' flex py-2 text-white px-7 '> <TbPlayerTrackPrev className='' size={24}/> Previous page</button>
        <h1 className=' py-2 text-white px-5 border-2 border-slate-300 rounded-md'>Page Number : {page}</h1>
        <button onClick={handlenextpage} className=' flex py-2 text-white px-7'>Next page<TbPlayerTrackNext className='' size={24}/></button>
        
      </div>
      
    </div>
  )
}

export default Homepages
