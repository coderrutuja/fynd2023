const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/socialApp";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    { _id: false }
);

const User = new mongoose.model("users", UserSchema);
async function run() {
    try {
        await mongoose.connect(url);
    }
}