import { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContextProvider } from "../context/RecipeContext";

export default function RecipeList() {
  const { recipes } = useContext(RecipeContextProvider);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Recipe List</h2>
      {recipes.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe} />;
      })}
    </div>
  );
}
