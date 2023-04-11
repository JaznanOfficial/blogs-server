const mongoose = require("mongoose");
var validator = require("validator");

const usersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email must be unique"],
            validate: [validator.isEmail, "Please provide a valid email"],
        },
        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },

        role: {
            // required: true,
            default: "user",
            type: String,
            enum: {
                values: ["admin", "moderator", "user"],
                message: "{VALUE} is wrong. must be admin/moderator/user",
            },
        },
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
