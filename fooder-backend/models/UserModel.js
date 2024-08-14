const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "please provide a valid email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        min: [6, "password must be more than 6 characters"],
        max: 50,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})



module.exports = mongoose.model("User", UserSchema)