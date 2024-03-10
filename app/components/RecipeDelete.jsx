export default function RecipeDelete({ id }) {
    const RemoveRecipe = async () => {
        const confirmed = confirm("Are you sure?");
        console.log(id)
        if (confirmed) {
            const res = await fetch(`/api/recipe?id=${id}`, {
            method: "DELETE",
            });

        location.reload();
        }
    };

  return (<>
  <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={RemoveRecipe}>Delete</button>
  </>
  );
}