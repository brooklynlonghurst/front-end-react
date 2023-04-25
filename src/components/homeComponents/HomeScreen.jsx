import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../RecipeCard'

function HomeScreen(){  
  const [recipes, setRecipes] = useState([])

  function getRecipes() {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeCard />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen