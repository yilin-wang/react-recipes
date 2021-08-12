import { useState, useEffect, useContext } from "react";

import RecipeList from "../components/recipes/RecipeList";
import RecipeCounterContext from "../store/recipe-counter-context";

function MyRecipesPage() {
  const recipeCounterCtx = useContext(RecipeCounterContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  function deleteItemHandler() {
    setIsDeleting(true)
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-recipes-ea075-default-rtdb.firebaseio.com/recipes.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key]
          };

          recipes.push(recipe);
        }
        setIsLoading(false);
        setIsDeleting(false);
        setLoadedRecipes(recipes);
        recipeCounterCtx.updateRecipeCount(recipes.length);
      });
  }, [isDeleting,recipeCounterCtx]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>My Recipes</h1>
      <RecipeList recipes={loadedRecipes} onDeleteItem={deleteItemHandler}/>
    </section>
  );
}

export default MyRecipesPage;
