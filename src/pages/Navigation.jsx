import React, { useState } from 'react'
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
function Navigation({searchvalue , setsearchvalue}) {
  return (
    <div className=' flex max-sm:grid max-sm:grid-col-1 max-sm:px-5 justify-between py-8 px-20 bg-black cursor-pointer w-screen'>
        <h1 className=' font-semibold flex text-white mb-2'> Themovie show <PiTelevisionSimpleBold size={26} className=' text-red-600'/></h1>

      <div className=' flex '>
        <input type="search" placeholder='Search movies' value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)} className=' outline-none max-sm:px-10 px-20 py-2 rounded-l-sm'/>
        <button className=' py-2 px-4 bg-red-600 text-white rounded-r-sm'>search</button>

      </div>
      <div>
        <h1 className=' font-bold text-white mt-2'>FAQ</h1>
      </div>
    </div>
  )
}

export default Navigation
