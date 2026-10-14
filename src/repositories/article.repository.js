import {ArticleModel} from "../models/article.model.js"

const Articles = {
    async create(article) {
        try {
            const newArticle = await ArticleModel.create(article)
            return newArticle
        } catch (error) {
            console.log(`[Articles.create]: ${error.message}`)
            return null
        }
    },
    async findAll() {
        try {
            const allArticles = await ArticleModel.find()
            return allArticles
        } catch (error) {
            console.log(`[Articles.findAll]: ${error.message}`)
            return null
        }
    },
    async findById(articleId) {
        try {
            const article = await ArticleModel.findById(articleId)
            return article
        } catch (error) {
            console.log(`[Articles.findById]: ${error.message}`)
            return null
        }
    },
    async findBySlug(articleSlug) {
        try {
            const article = await ArticleModel.findOne({slug: articleSlug})
            return article
        } catch (error) {
            console.log(`[Articles.findBySlug]: ${error.message}`)
            return null
        }
    },
    async deleteById(articleId) {
        try {
            const deletedArticle = await ArticleModel.findByIdAndDelete(articleId)
            return deletedArticle
        } catch (error) {
            console.log(`[Articles.deleteById]: ${error.message}`)
            return null
        }
    }
}

export {Articles}