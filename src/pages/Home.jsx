import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import RecipeContext from "../context/RecipeContext";

export default function Home() {
  return (
    <RecipeContext>
      <div className="md:p6 container mx-auto p-4 lg:p-8 xl:p-12 2xl:p-16">
        <h1 className="text-3xl font-bold">Recipe App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </RecipeContext>
  );
}
