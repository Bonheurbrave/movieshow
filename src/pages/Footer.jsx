import React from 'react'
import { PiTelevisionSimpleBold } from "react-icons/pi";
function Footer() {
  return (
    <div className=' flex justify-between px-20 py-5 bg-slate-500 max-sm:grid max-sm:grid-cols-2'>
      <div>
      <h1 className=' font-semibold flex'> Themovie show <PiTelevisionSimpleBold size={26} className=' text-red-600'/></h1>
      </div>
      <div>
        <h1 className=' font-semibold'>&copy;2023  Bobo-dev films</h1>
      </div>
      <div className=''>
        <h1 className=' font-semibold capitalize max-sm:text-center max-sm:py-2'>all rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer
