import { questionLevels } from "../config/test.config.js"

async function checkTest(req, res, next) {
    if (!req.body) return res.status(400).send("Заповніть поля")


    const { test } = req.body

    if(!test.name || typeof test.name !== "string") return res.status(400).send("Введіть правильне їм'я")
    
    if (test.showOnSite && typeof test.showOnSite !== "boolean") return res.status(400).send("Введіть значення показу тесту так або ні")

    if (!test.questions || typeof test.questions !== "array" || test.questions.length <= 6) return res.status(400).send("Зробіть більше питань")




    const { questions } = test

    questions.forEach(quest => {
        if(!quest) return res.status(400).send("Зробіть питання")
        if(!quest.text || typeof quest.text !== "string") return res.status(400).send("Введіть текст питання")
        if(!quest.level || typeof quest.level !== "string" || !questionLevels.includes(quest.level)) return res.status(400).send("Введіть правильний рівень питання")
    })




    const { answers } = questions

    answers.forEach(answer => {
        if(!answer) return res.status(400).send("Зробіть відповіді на питання")
        if(!answer.text || typeof answer.text !== "string") return res.status(400).send("Напишіть текст відповіді")
        if(!answer.right || typeof answer.right !== "boolean") return res.status(400).send("Виберіть чи є відповідь правильною")
    })


    req.newTest = test
    next()
}

export {checkTest}