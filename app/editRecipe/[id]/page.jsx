import EditRecipeForm from "@/app/components/RecipeEdit"

const getRecipeById = async( id ) => {
    try {
        //const baseUrl = process.env.NODE_ENV === 'production' ? 'https://example.com' : 'http://localhost:3000';
        const res = await fetch(`http://localhost:3000/api/recipe/${id}`, {
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
    const {recipeName , ingredients, description } = recipe;
    return <>
    <h1 className="text-3xl font-bold">Recipe App</h1>
    <div className="p-4 max-w-3xl mx-auto">
    <p>Fill the form below to update recipe</p>
    <EditRecipeForm id = {id} recipeName = { recipeName } ingredients = { ingredients } description = { description }/>
    </div>
    </>
}