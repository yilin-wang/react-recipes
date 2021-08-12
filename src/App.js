import { Route, Switch } from "react-router-dom";

import MyRecipesPage from "./pages/MyRecipes";
import NewRecipePage from "./pages/NewRecipe";
import FavoritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MyRecipesPage />
        </Route>
        <Route path="/new-recipe">
          <NewRecipePage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
