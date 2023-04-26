import React, { useState, useEffect } from 'react'
import DetailImage from './DetailImage';
import { useParams } from 'react-router-dom';
import axios from "axios"

function DetailScreen() {  
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
          console.log(res.data)
            setRecipe(res.data);
        });
  }, []);

  return (
    <section>
      <DetailImage img = {recipe.image_url} name = {recipe.recipe_name}/>
      <div className="detailScreenContainer">
        <div className="detailCardContainer">
          <div className='detailRecipeCard'>
          <h2 className='detailH2'>Recipe</h2>
            <h4 className='deatailH4'>Prep Time: {recipe.prep_time} </h4>
            <h4 className='deatailH4'>Cook Time: {recipe.cook_time}</h4>
            <h4 className='deatailH4'>Serves: {recipe.serves} </h4>
            <br/>
            <h2 className='detailH2'>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4 className='deatailH4'>{ing.quantity} {ing.ingredient}</h4>
            })}
          </div>
          <div className='instructionCard'>
            <h2 className='detailH2'>Instructions</h2>
            <h4 className='deataiInstructions'>{recipe.instructions && JSON.parse(recipe.instructions)}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
