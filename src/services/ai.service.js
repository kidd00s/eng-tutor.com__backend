import { aiConfig } from "../config/ai.config.js";
import { AppError } from "../errors/create.error.js";

const AiService = {

    async generateArticle(theme) {
            if (!aiConfig.DEEPSEEK_API_URL || !aiConfig.DEEPSEEK_API_KEY) throw new AppError("Силка або ключ не передані", 500)

            const requestBody = {
                model: aiConfig.models.easy,
                messages: [
                    {
                        role: "system",
                        content: aiConfig.prompts.systemPrompt
                    },
                    {
                        role: "user",
                        content: typeof theme === "object" ? JSON.stringify(theme) : theme
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            }

            const response = await fetch(aiConfig.DEEPSEEK_API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${aiConfig.DEEPSEEK_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            })

            const data = await response.json()

            if (!response.ok) throw new AppError("Запит до АІ не правильний", 500)



            const finalResult = data?.choices?.[0]?.message?.content?.trim()

            if(!finalResult) throw new AppError("Фінальний результат не переданий", 500)

            console.log(`[generateArticle]: ${finalResult}`)
            return finalResult
    }

}

export { AiService }