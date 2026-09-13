import { Schema, model } from "mongoose";

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
        enum: ["A1", "A2", "B1", "B2", "C1", "C2"]
    },
    order: {
        type: Boolean,
        default: false
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