import { ArticlesService } from "../services/article.service.js"


const ArticleController = {
    async generate(req, res, next) {
        try {
            const createdArticle = await ArticlesService.generate()
            
            return res.status(200).json({ success: true, message: "Статтю успішно створено", data: {article: createdArticle} })
        } catch (error) {
            console.log(`[ArticleController.create] - ${error.message}`)
            next(error)
        }
    },

    async getAll(req, res, next) {
        try {
            const articles = await ArticlesService.getAll()

            return res.status(200).json({ success: true, message: "Всі статті знайдені", data: {articles: articles} })
        } catch (error) {
            console.log(`[ArticleController.getAll] - ${error.message}`)
            next(error)
        }
    },

    async getBySlug(req, res, next) {
        try {
            const article = await ArticlesService.getBySlug(req.params.slug)

            return res.status(200).json({ success: true, message: "Стаття знайдена", data: {article: article} })
        } catch (error) {
            console.log(`[ArticleController.getBySlug] - ${error.message}`)
            next(error)
        }
    }


}

export { ArticleController }