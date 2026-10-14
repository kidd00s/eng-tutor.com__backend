import { Themes } from "../repositories/theme.repository.js"
import { AppError } from "../errors/create.error.js"

const ThemesService = {
    async create(theme) {
            const savedTheme = await Themes.create(theme)

            if(!savedTheme) throw new AppError("Тему не створено", 500)

            return savedTheme
    },

    async getThemeForArticle() {
            const theme = await Themes.getToArticle()

            if(!theme) throw new AppError("Тему не створено", 500)

            return theme
    },

    async getAll() {
            const themes = await Themes.findAll()

            if(!themes) throw new AppError("Теми не знайдено", 500)

            return themes
    },

    async getById(themeId) {
            const theme = await Themes.findById(themeId)

            if(!theme) throw new AppError("Тему не знайдено", 500)

            return theme
    }
}

export {ThemesService}