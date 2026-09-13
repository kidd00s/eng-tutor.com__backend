async function checkTest(req, res, next) {
    // if(!req.body) return res.status(400).send("Заповніть поля")
    
    // const {questions} = req.body
    
    // if(!questions || typeof questions !== "array") return res.status(400).send("Зробіть більше питань")

    // const newTest = {
    //     questions
    // }



    // req.newTest = newTest
    next()
}

export {checkTest}