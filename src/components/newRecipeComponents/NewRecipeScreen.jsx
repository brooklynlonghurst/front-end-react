import React from "react";

const NewRecipeScreen = () => {
  return (
    <section className="newRecipeBlock">
      <h1 className="newRecipeH1">Tell us about your Recipe!</h1>
      <form className="newRecipeForm">
        <div className="inputContainer">
          <input 
            placeholder="Name"
            name="recipeName"
            className="inputContainer1"
          />
          <input 
            placeholder="Image URL"
            name="imageURL"
            className="inputContainer1"
          />
        </div>
        <div className="radioContainer">
          <span>
            <input 
              className="radioInput"
              type="radio"
              name="type"
            />
            <h5 className="radioH5">Cook</h5>
          </span>
          <span>
            <input 
              className="radioInput"
              type="radio"
              name="type"
            />
            <h5>Bake</h5>
          </span>
          <span>
            <input 
              className="radioInput"
              type="radio"
              name="type"
            />
            <h5>Drink</h5>
          </span>
        </div>
        <div className="inputContainer">
          <input 
            placeholder="Prep Time"
            name="prepTime"
            className="inputContainer2"
          />
          <input 
            placeholder="Cook Time"
            name="cookTime"
            className="inputContainer2"
          />
          <input 
            placeholder="Serves"
            name="serves"
            className="inputContainer2"
          />
        </div>
        <div className="inputContainer">
          <div className="ingredientInput">
            <input 
              placeholder="Ingredient"
              className="ingredientInput1"
            />
            <input 
              placeholder="Quantity"
              className="ingredientInput1"
            />
          </div>
          <ul>
            <li
              className="listContainer"
            >2 Eggs</li>
            <li>4 Cups of Sugar</li>
            
          </ul>
        </div>
        <button
          type="button"
          className="addButton"
        >
          Add Another
        </button>
        <textarea 
          placeholder="What are the instructions?"
          rows={5}
          name="instructions"
          className="textArea"
        />
        <button
          placeholder="submitButton"
          className="submitButton"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
