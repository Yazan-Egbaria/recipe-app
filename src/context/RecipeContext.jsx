import { createContext, useEffect, useState } from "react";
import { getData, postData } from "../utils/getData";

export const RecipeContextProvider = createContext();

const RecipeContext = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  function addRecipe(newRecipe) {
    postData(newRecipe).then((data) => {
      setRecipes((prev) => {
        [...prev, data];
      });
    });
  }

  useEffect(() => {
    getData().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <RecipeContextProvider.Provider value={{ addRecipe, recipes }}>
      {children}
    </RecipeContextProvider.Provider>
  );
};

export default RecipeContext;
