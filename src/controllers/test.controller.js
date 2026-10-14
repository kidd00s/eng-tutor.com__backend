import { TestsService } from "../services/test.service.js"


const TestController = {
    async create(req, res, next) {
        try {
            const createdTest = await TestsService.create(req.body)

            return res.status(200).json({ success: true, message: "Тест успішно створено", data: {test: createdTest} })
        } catch (error) {
            console.log(`[TestController.create] - ${error.message}`)
            next(error)
        }
    },

    async getAll(req, res, next) {
        try {
            const tests = await TestsService.getAll()
            
            return res.status(200).json({ success: true, message: "Тести успішно знайдено", data: {test: tests} })
        } catch (error) {
            console.log(`[TestController.getALL] - ${error.message}`)
            next(error)
        }
    },

     async getById(req, res, next) {
        try {
            const oneTest = await TestsService.getById(req.params.id)
            
            return res.status(200).json({ success: true, message: "Тест успішно знайдено", data: {test: oneTest} })
        } catch (error) {
            console.log(`[TestController.get] - ${error.message}`)
            next(error)
        }
    }
}

export { TestController }