import { Requests } from "../repositories/request.repository.js"
import { AppError } from "../errors/create.error.js"

const RequestsService = {
    async create(request) {
            const savedRequest = await Requests.create(request)

            if(!savedRequest) throw new AppError("Заявку не створено", 500)

            return savedRequest
    },

    async getAll() {
            const requests = await Requests.findAll()

            if(!requests) throw new AppError("Заявки не знайдено", 500)

            return requests
    },

    async getById(requestId) {
            const request = await Requests.findById(requestId)

            if(!request) throw new AppError("Заявку не знайдено", 500) 

            return request
    }
}

export {RequestsService}