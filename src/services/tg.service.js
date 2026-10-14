import { tgConfig } from "../config/tg.config.js";
import { AppError } from "../errors/create.error.js"

const TgService = {
    async sendMessage(message) {

             const req = await fetch(`https://api.telegram.org/bot${tgConfig.BOT_TOKEN}/sendMessage`, {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: tgConfig.CHAT_ID,
                    text: message
                }),
                method: "POST"
             })

             if(!req.ok) throw new AppError("Заявку не надіслано", 500)
             const res = await req.json()

             return res.result

}
}

export { TgService }