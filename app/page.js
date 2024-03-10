"use client";

import React, { useState } from 'react';
import RecipeForm from "@/app/components/RecipeForm";
import RecipeList from "@/app/components/RecipeList";

export default function Home() {
  const [showRecipeForm, setShowRecipeForm] = useState(false);

  const handleShowRecipeForm = () => {
    if (!showRecipeForm) {
      setShowRecipeForm(true);
    }
  };

  const handleShowHome = () => {
    if (showRecipeForm) {
      setShowRecipeForm(false);
    }
  };

  return (
    <main>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Recipe App</h1>
        <div className="flex">
          <button onClick={handleShowHome} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">List</button>
          <button onClick={handleShowRecipeForm} className="bg-green-700 text-white py-2 px-4 rounded">Add</button>
        </div>
      </div>
      <div className="p-4 max-w-3xl mx-auto">
        {showRecipeForm ? <RecipeForm /> : <RecipeList />}
      </div>
    </main>
  );
}
