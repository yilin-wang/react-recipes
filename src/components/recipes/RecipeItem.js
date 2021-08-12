import { useContext } from 'react';
import Card from "../ui/Card";
import classes from "./RecipeItem.module.css";
import FavoritesContext from '../../store/favorites-context'

function RecipeItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  // Function to delete item
  function deleteItemHandler() {
    fetch(
      "https://react-recipes-ea075-default-rtdb.firebaseio.com/recipes/" + props.id + '.json',
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      props.onDeleteItem();
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
            </button>
          {/* Delete button */}
          <button onClick={deleteItemHandler}>
            {'Delete'}
            </button>
        </div>
      </Card>
    </li>
  );
}

export default RecipeItem;
