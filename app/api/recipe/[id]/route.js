import connectDB from "@/app/lib/mongodb"
import Recipe from "@/app/models/recipe"
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newRecipeName: recipeName, newIngredients: ingredients, newDescription: description } = await req.json();
  await connectDB();
  await Recipe.findByIdAndUpdate(id, { recipeName,ingredients, description });
  return NextResponse.json({ message: "Recipe updated" }, { status: 200 });
}

export async function GET(req, { params }) {
    const { id } = params;
    await connectDB();
    const recipe = await Recipe.findOne({ _id: id });
    console.log(JSON.stringify(recipe));
    return NextResponse.json({ recipe }, { status: 200 });
  }