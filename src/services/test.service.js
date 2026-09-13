import { Tests } from "../repositories/test.repository.js"

const TestsService = {
    async create(test) {
        try {
            const newTest = await Tests.create(test)

            if(!newTest) return null

            return newTest
        } catch (error) {
            console.log(`[TestsService.create] - ${error.message}`)
            return null
        }
    },

    async delete(testId) {
        try {
            const deletedTest = await Tests.deleteById(testId)

            if(!deletedTest) return null

            return deletedTest
        } catch (error) {
            console.log(`[TestsService.delete] - ${error.message}`)
            return null
        }
    },

    async update(testId) {
        try {
            const updatedTest = await Tests.updateById(testId)

            if(!updatedTest) return null

            return updatedTest
        } catch (error) {
            console.log(`[TestsService.update] - ${error.message}`)
            return null
        }
    },

    async changeStatus() {
        // 
    }
}

export {TestsService}