import { useEffect, useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import { getData, postData } from "../utils/getData";

export default function Home() {
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
    <div className="md:p6 container mx-auto p-4 lg:p-8 xl:p-12 2xl:p-16">
      <h1 className="text-3xl font-bold">Recipe App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
