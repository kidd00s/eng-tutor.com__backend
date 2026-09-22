import { Schema, model } from "mongoose";
import { questionLevels } from "../config/test.config.js"

const answerSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    right: {
        type: Boolean,
        default: false
    }
})

const questionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
        enum: questionLevels
    },
    order: {
        type: Number,
        default: 999
    },
    answers: [answerSchema]
})

const testSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    showOnSite: {
        type: Boolean,
        default: false
    },

    questions: [questionSchema]
}, {
    timestamps: true
})


const TestModel = model("tests", testSchema)

export {TestModel}