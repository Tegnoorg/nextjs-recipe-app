"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditRecipeForm({ id , recipeName, ingredients, description}){
    console.log(recipeName);
    console.log(ingredients);
    console.log(description);
    const [newRecipeName, setNewRecipeName] = useState(recipeName);
    const [newIngredients, setNewIngredients] = useState(ingredients);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!newRecipeName || !newIngredients || !newDescription) {
            alert("Please fill out all fields");
            return;
        }

        try{
            const res = await fetch(`/api/recipe/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ 
                    newRecipeName, 
                    newIngredients,
                    newDescription
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to update recipe");
              }
              router.refresh();
              router.push('/');
        } catch (error) {
            console.log(error);
          }

    }
  return (
    <>
        <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                <label  htmlFor="recipeName">Recipe Name</label>
                <input  onChange={(e)=> setNewRecipeName(e.target.value)} value={newRecipeName} type="text" id="recipeName" name="recipeName"/>
            </div>

            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea onChange={(e)=> setNewIngredients(e.target.value)} value={newIngredients} className="h-16" id="ingredients" name="ingredients"></textarea>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea onChange={(e)=> setNewDescription(e.target.value)} value={newDescription} className="h-32" id="description" name="description"></textarea>
            </div>
            <button className="bg-green-700 p-3 text-white font-bold" type="submit">update</button>

        </form>
    </>
);
}
