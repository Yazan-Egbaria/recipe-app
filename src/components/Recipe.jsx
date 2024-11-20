export default function Recipe({ recipe }) {
  return (
    <div className="mt-4 flex flex-col gap-2 rounded p-8 shadow">
      <div id="recipeName" className="flex gap-2">
        <h3 className="font-bold text-cyan-600">Recipe Name:</h3>
        <p>{recipe.recipeName}</p>
      </div>

      <div id="recipeInstructions" className="flex gap-2">
        <h3 className="font-bold text-cyan-600">Instructions:</h3>
        <p>{recipe.recipeInstructions}</p>
      </div>

      <div id="recipeCategory" className="flex gap-2">
        <h3 className="font-bold text-cyan-600">Category:</h3>
        <p>{recipe.recipeCategory}</p>
      </div>
    </div>
  );
}
