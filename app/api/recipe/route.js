import connectDB from "@/app/lib/mongodb"
import Recipe from "@/app/models/recipe"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB();
    await Recipe.findByIdAndDelete(id);
    return NextResponse.json({ message: "Recipe deleted" }, { status: 200 });
  }

export const GET = async () => {
    try {
        await connectDB();
        const recipes = await Recipe.find().sort({ date: -1 });

        return new NextResponse(JSON.stringify(recipes));
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json(Error);
        }
    }
}

export async function POST(req){
    const { recipeName, ingredients, description } = await req.json();

    console.log("recipe name", recipeName);
    console.log("ingredients", ingredients);
    console.log("recipe description", description);

    try{
        console.log("route try");
        await connectDB();
        await Recipe.create({recipeName, ingredients, description});

        return NextResponse.json({
            msg: ["Recipe sent successfully"], success: true
        });
    } catch(error){
        if(error instanceof mongoose.Error.ValidationError){
            let errorList = [];
            for(let e in error.errors) {
                errorList.push(error.errors[e].message);
            }

            return NextResponse.json({msg: errorList})
        }
        else{
            return NextResponse.json(Error);
        }
    }
}