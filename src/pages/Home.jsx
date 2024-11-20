import { useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  return (
    <div className="md:p6 container mx-auto p-4 lg:p-8 xl:p-12 2xl:p-16">
      <h1 className="text-3xl font-bold">Recipe App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
