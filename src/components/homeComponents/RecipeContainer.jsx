import React, {useState} from "react"
import {BiSearchAlt2} from "react-icons/bi"
import RecipeCard from "../RecipeCard"

function RecipeContainer({recipes}) {
    const [search, setSearch] = useState("")

    // useEffect(() => {
        const recipeDisplay = recipes
        .filter((recipe, index) => {
            let title = recipe.recipe_name.toLowerCase()
            let searchParams = search.toLowerCase()
            // console.log(title.includes(searchParams))
            return title.includes(searchParams)
        })
        .map((recipe, index) => {
            // console.log(recipe.recipe_name)
            console.log(recipe)
            return <RecipeCard recipe={recipe}/>
        })
    // }, [])

    return (
        <div className="recipeInputDiv">
            <div className="searchbar">
                    <BiSearchAlt2 size="2em" color="#DA7635" />
                    <input 
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a Recipe"
                        className="recipeInput"
                    />
            </div>
                <div className="belowInputDiv">
                    {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
                </div>
        </div>
    )
}

export default RecipeContainer