const mongoose = require("mongoose");
var validator = require("validator");

const categoriesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },

        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },
    },
    {
        timestamps: true,
    }
);

const Categories = mongoose.model("categories", categoriesSchema);

module.exports = Categories;
