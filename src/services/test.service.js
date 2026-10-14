import { Tests } from "../repositories/test.repository.js"
import { AppError } from "../errors/create.error.js"

const TestsService = {
    async create(test) {
            const newTest = await Tests.create(test)

            if (!newTest) throw new AppError("Тест не створено", 500)

            return newTest
    },

    async deleteTest(testId) {
            const deletedTest = await Tests.deleteById(testId)

            if (!deletedTest) throw new AppError("Тест не видалено", 500)

            return deletedTest
    },

    async updateTest(testId) {
            const updatedTest = await Tests.updateById(testId)

            if (!updatedTest) throw new AppError("Тест не оновлено", 500)

            return updatedTest
    },

    async changeStatus(testId, newStatus) {
            const updatedStatus = await Tests.changeStatusById(testId, newStatus)

            if (!updatedStatus) throw new AppError("Статус тесту не змінено", 500)

            return updatedStatus
    },

    async getAll() {
            const tests = await Tests.findAll()

            if (!tests) throw new AppError("Тести не знайдено", 500)

            return tests
    },

    async getById(testId) {
            const test = await Tests.findById(testId)

            if (!test) throw new AppError("Тест не знайдено", 500)

            return test
    }
}

export { TestsService }