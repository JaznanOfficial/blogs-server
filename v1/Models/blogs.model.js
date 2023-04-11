const mongoose = require("mongoose");
var validator = require("validator");

const blogsSchema = mongoose.Schema(
    {
        name: {
            unique: [true, "Name must be unique"],
            type: String,
            required: [true, "Name is required"],
        },
        author: {
            type: String,
            required: [true, "Name is required"],
        },

        img: {
            type: String,
            required: [true, "img is required"],
            // unique: [true, "Email must be unique"],
            validate: [validator.isURL, "Please provide an URL"],
        },
        post: {
            required: true,
            type: String,
        },
        category: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
            validate: [validator.isEmail, "Please provide an Email"],
        },
        like_count: {
            type: Number,
        },
        dislike_count: {
            type: Number,
        },
        comments: [
            {
                name: {
                    unique: [true, "Name must be unique"],
                    type: String,
                    required: [true, "Name is required"],
                },

                email: {
                    type: String,
                    validate: [validator.isEmail, "Please provide an Email"],
                },
                comment: {
                    type: String,
                },
                img: {
                    type: String,
                    required: [true, "img is required"],
                    validate: [validator.isURL, "Please provide an URL"],
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Blogs = mongoose.model("blogs", blogsSchema);

module.exports = Blogs;
