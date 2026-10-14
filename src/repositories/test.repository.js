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
    async findAll() {
        try {
            const tests = await TestModel.find()
            return tests
        } catch (error) {
            console.log(`[Tests.findAll]: ${error.message}`)
            return null
        }
    },

    async findById(testId) {
        try {
            const test = await TestModel.findById(testId)
            return test
        } catch (error) {
            console.log(`[Tests.findById]: ${error.message}`)
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
    async changeStatusById(testId, newStatus) {
        try {
            const updatedTest = await TestModel.findByIdAndUpdate(testId, {
                showOnSite: newStatus
            })
            return updatedTest
        } catch (error) {
            console.log(`[Tests.changeStatusById]: ${error.message}`)
            return null
        }
    },

}

export { Tests }