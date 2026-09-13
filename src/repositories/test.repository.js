import { TestModel } from "../models/test.model.js"

const Tests = {
    async create(test) {
        try {
            const newTest = await TestModel.create(test)
            return newTest
        } catch (error) {
            console.log(`[Tests.create]: ${error.message}`)
            return null
        }
    },
    async deleteById(testId) {
        try {
            const deletedTest = await TestModel.findByIdAndDelete(testId)
            return deletedTest
        } catch (error) {
            console.log(`[Tests.deleteById]: ${error.message}`)
            return null
        }
    },
    async updateById(testId) {
        try {
            const updatedTest = await TestModel.findByIdAndUpdate(testId)
            return updatedTest
        } catch (error) {
            console.log(`[Tests.updateById]: ${error.message}`)
            return null
        }
    },
    async changeStatusById(testId) {
        try {
            const newStatusTest = await TestModel.createSearchIndexes()
            return newStatusTest
        } catch (error) {
            console.log(`[Tests.updateById]: ${error.message}`)
            return null
        }
    },

}

export {Tests}