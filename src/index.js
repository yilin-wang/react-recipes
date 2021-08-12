import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
import { RecipeCounterContextProvider } from "./store/recipe-counter-context";

ReactDOM.render(
  <RecipeCounterContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </RecipeCounterContextProvider>,
  document.getElementById("root")
);
