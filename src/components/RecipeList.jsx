import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Recipe List</h2>
      {recipes.map((recipe, index) => {
        return <Recipe key={index} recipe={recipe} />;
      })}
    </div>
  );
}
