import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteRecipe) => {},
    removeFavorite: (recipeId) => {},
    itemIsFavorite: (recipeId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteRecipe) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteRecipe);
        });
    }

    function removeFavoriteHandler(recipeId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(recipe => recipe.id !== recipeId);
        })
    }

    function itemIsFavoriteHandler(recipeId) {
        return userFavorites.some(recipe => recipe.id === recipeId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;