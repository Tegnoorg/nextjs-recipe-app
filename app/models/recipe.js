import mongoose, { Schema } from 'mongoose';


const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: [true, "Recipe name is required. \n"],
    },

    ingredients: {
        type: String,
        required: [true, "Ingredients is required. \n"],
    },

    description: {
        type: String,
        required: [true, "Description is required. \n"],
    },
    
    date: {
        type: Date,
        default: Date.now,
    },
});

const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
