import { useContext } from 'react';
import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
import RecipeCounterContext from "../../store/recipe-counter-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const recipeCounterCtx = useContext(RecipeCounterContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Recipes App</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>My Recipes
            <span className={classes.badge}>{recipeCounterCtx.recipeCount}</span>
            </Link>
          </li>
          <li>
            <Link to='/favorites'>Favorite Recipes
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
          <li>
            <Link to='/new-recipe'>Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
