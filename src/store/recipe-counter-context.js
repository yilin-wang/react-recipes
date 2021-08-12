import { createContext, useState } from 'react';

const RecipeCounterContext = createContext({
    recipeCount: 0,
    updateRecipeCount: (newRecipeCount) => {}
});

export function RecipeCounterContextProvider(props) {
    const [totalRecipes, setTotalRecipes] = useState(0);

    function updateRecipeCount(newRecipeCount) {
        setTotalRecipes(newRecipeCount);
    }

    const context = {
        recipeCount: totalRecipes,
        updateRecipeCount: updateRecipeCount
    };

    return <RecipeCounterContext.Provider value={context}>
        {props.children}
    </RecipeCounterContext.Provider>
}

export default RecipeCounterContext;