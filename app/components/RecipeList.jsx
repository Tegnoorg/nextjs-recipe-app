import Link from "next/link";
import React, { useState, useEffect } from "react";
import RecipeDelete from "@/app/components/RecipeDelete";

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/recipe");
                const data = await res.json();
                setRecipes(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>List of Recipes</p>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-slate-100 rounded-md p-4 mb-4">
                            <Link href={`/infoRecipe/${recipe._id}`}>
                                <div>
                                    <h2><strong>Name: </strong>{recipe.recipeName}</h2>
                                    <p><strong>Ingredients: </strong> {recipe.ingredients}</p>
                                    <p><strong>Description: </strong> {recipe.description}</p>
                                </div>
                            </Link>
                            <div className="flex justify-between">
                                <Link href={`/editRecipe/${recipe._id}`}>
                                        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                                </Link>
                                <RecipeDelete id={recipe._id} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
