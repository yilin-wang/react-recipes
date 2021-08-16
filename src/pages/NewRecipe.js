import { useHistory } from "react-router-dom";

import NewRecipeForm from "../components/recipes/NewRecipeForm";

function NewRecipePage() {
  const history = useHistory();

  function addRecipeHandler(recipeData) {
    fetch(
      "https://react-recipes-ea075-default-rtdb.firebaseio.com/recipes.json",
      {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Recipe</h1>
      <NewRecipeForm onAddRecipe={addRecipeHandler} />
    </section>
  );
}

export default NewRecipePage;
