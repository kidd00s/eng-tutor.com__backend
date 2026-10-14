import {RequestModel} from "../models/request.model.js"

const Requests = {
    async create(request) {
        try {
            const newRequest = await RequestModel.create(request)
            return newRequest
        } catch (error) {
            console.log(`[Requests.create]: ${error.message}`)
            return null
        }
    },
    async findAll() {
        try {
            const allRequests = await RequestModel.find()
            return allRequests
        } catch (error) {
            console.log(`[Requests.findAll]: ${error.message}`)
            return null
        }
    },
    async findById(requestId) {
        try {
            const request = await RequestModel.findById(requestId)
            return request
        } catch (error) {
            console.log(`[Requests.findById]: ${error.message}`)
            return null
        }
    },
    async deleteById(requestId) {
        try {
            const deletedRequest = await RequestModel.findByIdAndDelete(requestId)
            return deletedRequest
        } catch (error) {
            console.log(`[Requests.deleteById]: ${error.message}`)
            return null
        }
    },
    async changeStatusById(requestId, newStatus) {
        try {
            const updatedRequest = await RequestModel.findByIdAndUpdate(requestId,
                {status: newStatus},
                {new: true, runValidators: true}
            )
            return updatedRequest
        } catch (error) {
            console.log(`[Requests.changeStatusById]: ${error.message}`)
            return null
        }
    }
}

export {Requests}