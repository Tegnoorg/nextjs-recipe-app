"use client";
import { useRouter } from "next/navigation";

export default function InfoRecipeForm({ recipeName, ingredients, description, date }){


    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

              router.refresh();
              router.push('/');
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                        <div className="bg-slate-100 rounded-md p-4 mb-4">
                            <h2><strong>Name: </strong>{recipeName}</h2>
                            <p><strong>Ingredients: </strong> {ingredients}</p>
                            <p><strong>Description: </strong> {description}</p>
                            <p><strong>Date Modified: </strong> {date}</p>
                            <div className="flex justify-between">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Back</button>
                            </div>
                        </div>
                </div>

        </form>
    </>
);
}
