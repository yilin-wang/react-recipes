import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import RecipeList from "../components/recipes/RecipeList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

let content;

if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorite recipes. Add favorites to see them on this page.</p>
} else {
    content = <RecipeList recipes={favoritesCtx.favorites} />
}

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
