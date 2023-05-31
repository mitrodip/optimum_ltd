import mongoose from "mongoose";
const usermodel = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    order: { type: String, required: true, trim: true },
    quntty: { type: Number, required: true, main: 1, max: 1000 },
    color: { type: String, required: true, trim: true }

})
const adminModel = mongoose.model("list", usermodel)
export default adminModel