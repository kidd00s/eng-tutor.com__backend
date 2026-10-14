import { Themes } from "../repositories/theme.repository.js"

const ThemesService = {
    async create(theme) {
        try {
            const savedTheme = await Themes.create(theme)

            if(!savedTheme) return null

            return savedTheme
        } catch (error) {
            console.log(`[ThemesService.create] - ${error.message}`)
            return null
        }
    },

    async getThemeForArticle() {
        try {
            const theme = await Themes.getToArticle()

            if(!theme) return null

            return theme
        } catch (error) {
            console.log(`[ThemesService.getThemeForArticle] - ${error.message}`)
            return null
        }
    },

    async getAll() {
        try {
            const themes = await Themes.findAll()

            if(!themes) return null

            return themes
        } catch (error) {
            console.log(`[ThemesService.getAll] - ${error.message}`)
            return null
        }
    },

    async getById(themeId) {
        try {
            const theme = await Themes.findById(themeId)

            if(!theme) return null

            return theme
        } catch (error) {
            console.log(`[ThemesService.getById] - ${error.message}`)
            return null
        }
    }
}

export {ThemesService}