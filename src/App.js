import React , {useState} from 'react'
import { BrowserRouter  , Routes , Route}  from 'react-router-dom'
import Navigation from './pages/Navigation'
import Homepages from './pages/Homepages'
import Footer from './pages/Footer'
function App() {
const [searchvalue , setsearchvalue] =  useState("")
  return (
    <div>
      <Navigation searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>
      <Homepages searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>
      <Footer />
    </div>
  )
}

export default App
