import React, {useState} from "react"
import SearchIcon from '@mui/icons-material/Search';


function RecipeCard() {
    const [search, setSearch] = useState("")

    return (
        <>
            <div className="recipeInputDiv">
                    <input 
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a Recipe"
                        className="recipeInput"
                    />
                </div>
            <div className="recipesBlock">
                <div className="recipeCardBlock">
                    <div className="recipeCard">
                        <img src="https://images.pexels.com/photos/16406495/pexels-photo-16406495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="chocolate cake img" className="recipeCardImg"/>
                        <h1 className="cardTitle">Triple Chocolate Mouuse Cake</h1>
                        <button className="cardButton">See More</button>
                    </div>
                    <div className="recipeCard">
                        <img src="https://images.pexels.com/photos/11267137/pexels-photo-11267137.jpeg?auto=compress&cs=tinysrgb&w=600" alt="steak img" className="recipeCardImg"/>
                        <h2 className="cardTitle">Rosemary Seared Steak</h2>
                        <button className="cardButton">See More</button>
                    </div>
                    <div className="recipeCard">
                        <img src="https://images.pexels.com/photos/2615290/pexels-photo-2615290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="martini img" className="recipeCardImg"/>
                        <h2 className="cardTitle">Martini</h2>
                        <button className="cardButton">See More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard