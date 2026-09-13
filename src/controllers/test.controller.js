import { TestsService } from "../services/test.service.js"


const TestController = {
    async create(req, res) {
        try {
            const createdTest = await TestsService.create(req.newTest)

            if (!createdTest) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тест успішно створено", data: {test: createdTest} })
        } catch (error) {
            console.log(`[TestController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { TestController }