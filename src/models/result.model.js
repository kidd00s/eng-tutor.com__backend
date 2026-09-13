import { text } from "express";

const result = {
    username: "Yura",
    contact: "2290356671",
    test: "id",
    createdAt: "",
    answers: [
        {
            question: "text",
            level: "A1",
            answer: {
                text: "2",
                right: false
            },
            options: [
                {
                    text: "1",
                    right: true
                },
                {
                    text: "2",
                    right: false
                },
                {
                    text: "3",
                    right: false
                }
            ]
        },
        {
            question: "text",
            level: "A2",
            answer: {
                text: "2",
                right: false
            },
            options: [
                {
                    text: "1",
                    right: true
                },
                {
                    text: "2",
                    right: false
                },
                {
                    text: "3",
                    right: false
                }
            ]
        },
    ]
}