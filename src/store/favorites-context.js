import { createContext, useState } from "react";

// this can be anything, here we create an object with empty values
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

// regular react component that can provide context to any component that needs the values by wrapping around them,
// also responsible for updating the context values.
function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
