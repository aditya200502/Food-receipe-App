import Cuisine from "./Cuisine"
import Home from "./Home"
import {Route, Routes } from 'react-router-dom'
import Search from "./Search"
import Recipe from "./Recipe"

function Pages() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:input" element={<Search />} />
        <Route path="/recipe/:name" element={<Recipe/>}/>
      </Routes>


  )
}

export default Pages
