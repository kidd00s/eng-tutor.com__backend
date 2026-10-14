import { Articles } from "../repositories/article.repository.js"
import { ThemesService } from "./theme.service.js"
import { AiService } from "./ai.service.js"

const ArticlesService = {
    async generate() {
        try {
            const theme = await ThemesService.getThemeForArticle()
            if(!theme) return null

            const article = await AiService.generateArticle(theme)
            if(!article) return null

            console.log(article)
            const savedArticle = await Articles.create(article)

            if(!savedArticle) return null

            return savedArticle
        } catch (error) {
            console.log(`[ArticlesService.generate] - ${error.message}`)
            return null
        }
    },

    async getAll() {
        try {
            const allArticles = await Articles.findAll()
            if(!allArticles) return null

            return allArticles
        } catch (error) {
            console.log(`[ArticlesService.getAll] - ${error.message}`)
            return null
        }
    },

    async getBySlug(articleSlug) {
        try {
            const article = await Articles.findBySlug(articleSlug)
            if(!article) return null

            return article
        } catch (error) {
            console.log(`[ArticlesService.getBySlug] - ${error.message}`)
            return null
        }
    }
}

export {ArticlesService}