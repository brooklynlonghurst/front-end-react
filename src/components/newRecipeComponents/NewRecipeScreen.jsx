import React, { useState } from "react";
import { Formik } from "formik"
import axios from "axios"

const NewRecipeScreen = () => {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [ingredients, setIngredients] = useState([])

  function addIngredient() {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  function onSubmit(values) {
    values.ingredients = ingredients
    console.log(values)

    axios 
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li className="listContainer">
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section className="newRecipeBlock">
      <h1 className="newRecipeH1">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className="newRecipeForm" onSubmit={handleSubmit}>
            <div className="inputContainer">
              <input 
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
                className="inputContainer1"
              />
              <input 
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
                className="inputContainer1"
              />
            </div>
            <div className="radioContainer">
              <span>
                <input 
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                  className="radioInput"
                />
                <h5 className="radioH5">Cook</h5>
              </span>
              <span>
                <input 
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                  className="radioInput"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input 
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                  className="radioInput"
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className="inputContainer">
              <input 
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
                className="inputContainer2"
              />
              <input 
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
                className="inputContainer2"
              />
              <input 
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
                className="inputContainer2"
              />
            </div>
            <div className="inputContainer">
              <div className="ingredientInput">
                <input 
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ingredientInput1"
                />
                <input 
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="ingredientInput1"
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className="addButton"
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea 
              placeholder="What are the instructions?"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
              className="textArea"
            />
            <button
              type="sumbit"
              placeholder="submitButton"
              className="submitButton"
            >
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  );

};

export default NewRecipeScreen;
