import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { Recipe } from "types";

interface RecipeInput {
  recipe: string;
}

const Search = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeInput>();
  const onSubmit: SubmitHandler<RecipeInput> = async (data) => {
    console.log(data);
    const res = await fetch(`api/recipes?search=${data.recipe}`, {
      method: "GET",
    });
    const recipeData = await res.json();
    setRecipes(recipeData.results);
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-center text-4xl font-bold">Search Recipe</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4"
      >
        <div className="flex justify-center">
          <input type="text" {...register("recipe")} className="rounded p-2" />
        </div>
        {errors.recipe && <span>This field is required</span>}
        <div className="flex justify-center">
          <button type="submit" className="rounded bg-stone-200 p-2">
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded bg-stone-200 p-2 shadow-lg drop-shadow-lg"
          >
            <h2>{recipe.name}</h2>
            <p>{recipe.cook_time_minutes}</p>
            <p>{recipe.country}</p>
            <p>{recipe.description}</p>
            <p>Instructions</p>
            {recipe.instructions.map((instruction, i) => (
              <div key={i}>
                <p>{instruction.display_text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;