const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
        },
        password: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        Img: {
            type: String,
        },
        name: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        contact: {
            type: String,
            required: false,
        },
        ban: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
