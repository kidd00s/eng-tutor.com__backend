import { Articles } from "../repositories/article.repository.js"
import { ThemesService } from "./theme.service.js"
import { AiService } from "./ai.service.js"
import { AppError } from "../errors/create.error.js"

const ArticlesService = {
    async generate() {
            const theme = await ThemesService.getThemeForArticle()
            if(!theme) throw new AppError("Немає тем для статті", 404)

            const article = await AiService.generateArticle(theme)
            if(!article) throw new AppError("Статтю не згенеровано", 502) 

            console.log(article)
            const savedArticle = await Articles.create(article)

            if(!savedArticle) throw new AppError("Статтю не збережено", 500) 

            return savedArticle
    },

    async getAll() {
            const allArticles = await Articles.findAll()
            if(!allArticles) throw new AppError("Статті не знайдено", 500)

            return allArticles
    },

    async getBySlug(articleSlug) {
            const article = await Articles.findBySlug(articleSlug)
            if(!article) throw new AppError("Статтю не знайдено", 500)

            return article
    }
}

export {ArticlesService}