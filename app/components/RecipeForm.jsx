"use client";

import React, { useState } from "react";

export default function RecipeForm() {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleAdd = async (e) => {
        e.preventDefault();
        // console.log("recipe name", recipeName);
        // console.log("ingredients", ingredients);
        // console.log("recipe description", description);
    
        const res = await fetch("/api/recipe", {
            method: "POST",
            headers: { 
                'Content-Type': "application/json"
                },
            body: JSON.stringify({
                recipeName,
                ingredients,
                description,
            }),
        });
        //console.log("after");

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
        //console.log(error);

        if(success){
            setRecipeName("");
            setIngredients("");
            setDescription("");
        }
        //console.log("done");
    };

    const handleReset = (e) => {
        e.preventDefault();
        setRecipeName("");
        setIngredients("");
        setDescription("");
        setError(["Reset successful"]);
        setSuccess(false);
    };

    return (
        <>
        <p>Fill the form below to add recipe</p>
            <form onSubmit={handleAdd} onReset={handleReset} className="py-4 mt-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="recipeName">Recipe Name</label>
                    <input onChange={(e) => setRecipeName(e.target.value)} value={recipeName} type="text" id="recipeName" name="recipeName"/>
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea onChange={(e) => setIngredients(e.target.value)} value={ingredients} className="h-16" id="ingredients" name="ingredients"></textarea>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="h-32" id="description" name="description"></textarea>
                </div>

                <button className="bg-orange-500 p-3 text-white font-bold" type="reset">Reset</button>
                <button className="bg-green-700 p-3 text-white font-bold" type="submit">Add</button>

            </form>

            {error && (
                <div className="bg-slate-100 flex flex-col">
                    <div className="text-yellow-500 px-5 py-2">
                        {error}
                    </div>
                </div>
            )}
        </>
    );
}
