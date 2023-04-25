import React from "react"

function RecipeCard() {
    return (
        <div className="recipesBlock">
            <div className="recipeCard">
                <img src="https://images.pexels.com/photos/16406495/pexels-photo-16406495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="chocolate cake img" className="recipeCardImg"/>
                <h2 className="cardTitle">Triple Chocolate Mouuse Cake</h2>
                <button className="cardButton">See More</button>
            </div>
        </div>
    )
}

export default RecipeCard