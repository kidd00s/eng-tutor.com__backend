import { RequestsService } from "../services/request.service.js";
import { TgService } from "../services/tg.service.js";

const RequestsController = {
    async create(req, res, next) {
        try {
            const savedRequest = await RequestsService.create(req.newRequest)

            const {name, contact, comment, test} = savedRequest
            const message = `Нова заявка з сайту:\n\nІмя: ${name}\nКонтакт: ${contact}\nКоментар: ${comment || "Коментар відсутній"}\nТест:${test || "Тест відсутній"}`
            await TgService.sendMessage(message)


            return res.status(200).json({ success: true, message: "Заявку успішно надіслано" })
        } catch (error) {
            console.log(`[RequestsController.create] - ${error.message}`)
            next(error)
        }
    },

    async getAll(req, res, next) {
        try {
            const requests = await RequestsService.getAll()
            
            return res.status(200).json({ success: true, message: "Заявки знайдено" })
        } catch (error) {
            console.log(`[RequestsController.create] - ${error.message}`)
            next(error)
        }
    },

    async getById(req, res, next) {
        try {
            const request = await RequestsService.getById(req.params.id)

            return res.status(200).json({ success: true, message: "Заявки знайдено" })
        } catch (error) {
            console.log(`[RequestsController.create] - ${error.message}`)
            next(error)
        }
    },
}

export { RequestsController }