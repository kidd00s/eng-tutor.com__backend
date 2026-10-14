import { TestsService } from "../services/test.service.js"


const TestController = {
    async create(req, res) {
        try {
            const createdTest = await TestsService.create(req.body)

            if (!createdTest) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тест успішно створено", data: {test: createdTest} })
        } catch (error) {
            console.log(`[TestController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

    async getAll(req, res) {
        try {
            const tests = await TestsService.getAll()

            if (!tests) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тести успішно знайдено", data: {test: tests} })
        } catch (error) {
            console.log(`[TestController.getALL] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

     async getById(req, res, testId) {
        try {
            const oneTest = await TestsService.getById(testId)

            if (!oneTest) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тест успішно знайдено", data: {test: oneTest} })
        } catch (error) {
            console.log(`[TestController.get] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { TestController }