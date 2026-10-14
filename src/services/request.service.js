import { Requests } from "../repositories/request.repository.js"

const RequestsService = {
    async create(request) {
        try {
            const savedRequest = await Requests.create(request)

            if(!savedRequest) return null

            return savedRequest
        } catch (error) {
            console.log(`[RequestsService.create] - ${error.message}`)
            return null
        }
    },

    async getAll() {
        try {
            const requests = await Requests.findAll()

            if(!requests) return null

            return requests
        } catch (error) {
            console.log(`[RequestsService.getAll] - ${error.message}`)
            return null
        }
    },

    async getById(requestId) {
        try {
            const request = await Requests.findById(requestId)

            if(!request) return null

            return request
        } catch (error) {
            console.log(`[RequestsService.getById] - ${error.message}`)
            return null
        }
    }
}

export {RequestsService}