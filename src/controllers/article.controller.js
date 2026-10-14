import { ArticlesService } from "../services/article.service.js"


const ArticleController = {
    async generate(req, res) {
        try {
            const createdArticle = await ArticlesService.generate()

            if (!createdArticle) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
                

            
            return res.status(200).json({ success: true, message: "Статтю успішно створено", data: {article: createdArticle} })
        } catch (error) {
            console.log(`[ArticleController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

    async getAll(req, res) {
        try {
            const articles = await ArticlesService.getAll()

            if (!articles) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
            if (articles.length === 0) return res.status(200).json({ success: true, message: "Статті ще немає" })

            return res.status(200).json({ success: true, message: "Всі статті знайдені", data: {articles: articles} })
        } catch (error) {
            console.log(`[ArticleController.getAll] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

    async getBySlug(req, res, articleSlug) {
        try {
            const article = await ArticlesService.getBySlug(articleSlug)

            if (!article) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            return res.status(200).json({ success: true, message: "Стаття знайдена", data: {articles: article} })
        } catch (error) {
            console.log(`[ArticleController.getBySlug] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }


}

export { ArticleController }