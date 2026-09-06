import { Schema, model } from "mongoose";

const themeSchema = new Schema({
    quesrions: [

    ],
    levels: []

}, {
    timestamps: true
})



const ThemeModel = model("themes", themeSchema)

export {ThemeModel}