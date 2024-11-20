import { useContext, useState } from "react";
import { RecipeContextProvider } from "../context/RecipeContext";

export default function AddRecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("Lunch");
  const { addRecipe } = useContext(RecipeContextProvider);

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = { recipeName, recipeInstructions, recipeCategory };
    addRecipe(newRecipe);
    setRecipeName("");
    setRecipeInstructions("");
    setRecipeCategory("Lunch");
  }

  return (
    <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
      <div id="recipeName" className="flex flex-col gap-2">
        <label htmlFor="text" className="w-full font-bold">
          Recipe Name
        </label>
        <input
          type="text"
          name="text"
          placeholder="Enter recipe name"
          className="w-full rounded border px-2 py-1"
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
        />
      </div>

      <div id="recipeInstructions" className="flex flex-col gap-2">
        <label htmlFor="recipeTextArea" className="w-full font-bold">
          Instructions
        </label>
        <textarea
          name="recipeTextArea"
          id="recipeTextArea"
          className="h-96 w-full rounded border px-2 py-1"
          value={recipeInstructions}
          onChange={(e) => {
            setRecipeInstructions(e.target.value);
          }}
        ></textarea>
      </div>

      <div id="recipeCategory" className="flex flex-col gap-2">
        <label htmlFor="categorySelect" className="w-full font-bold">
          Category
        </label>
        <select
          name="categorySelect"
          id="category"
          className="w-full rounded border px-2 py-1"
          value={recipeCategory}
          onChange={(e) => {
            setRecipeCategory(e.target.value);
          }}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <button
        type="submit"
        className="h-12 w-full rounded bg-cyan-500 px-2 py-1 font-bold text-white transition-all duration-300 hover:bg-cyan-400"
      >
        Add To List
      </button>
    </form>
  );
}
