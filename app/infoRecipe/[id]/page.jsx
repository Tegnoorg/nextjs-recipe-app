import InfoRecipeForm from "@/app/components/RecipeInfo"

const getRecipeById = async( id ) => {
    try {
        const baseUrl = process.env.NODE_ENV === 'production' ? 'https://example.com' : 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/recipe/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Error("failed to fetch recipe")
        }
        return res.json();
    } catch (error){
        console.log(error);
    }
};

export default async function editRecipe( { params }){
    const {id} = params;
    const { recipe } = await getRecipeById(id);
    console.log("id: ", id);
    const {recipeName , ingredients, description, date } = recipe;
    return <InfoRecipeForm recipeName = { recipeName } ingredients = { ingredients } description = { description } date = {date}/>
}