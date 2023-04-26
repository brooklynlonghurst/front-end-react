import React, {useState} from "react"
import { useNavigate } from "react-router-dom"



function RecipeCard({recipe}) {
    console.log(recipe.recipe_name) 
    
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (
        <div className="recipesBlock">
            <div className="recipeCardBlock">
                <div className="recipeCard">
                    <img src={recipe.image_url} alt={recipe.recipe_name + "img"} className="recipeCardImg"/>
                    <h1 className="cardTitle">{recipe.recipe_name}</h1>
                    <button className="cardButton" onClick={handleClick}>See More</button>
                </div>
                {/* <div className="recipeCard">
                    <img src="https://images.pexels.com/photos/11267137/pexels-photo-11267137.jpeg?auto=compress&cs=tinysrgb&w=600" alt="steak img" className="recipeCardImg"/>
                    <h2 className="cardTitle">Rosemary Seared Steak</h2>
                    <button className="cardButton">See More</button>
                </div>
                <div className="recipeCard">
                    <img src="https://images.pexels.com/photos/2615290/pexels-photo-2615290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="martini img" className="recipeCardImg"/>
                    <h2 className="cardTitle">Martini</h2>
                    <button className="cardButton">See More</button>
                </div> */}
            </div>
        </div>
    )
}

export default RecipeCard