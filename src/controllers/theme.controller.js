import { ThemesService } from "../services/theme.service.js"


const ThemeController = {
    async create(req, res, next) {
        try {
            const createdTheme = await ThemesService.create(req.newTheme)

            return res.status(201).json({ success: true, message: "Тему успішно створено", data: {theme: createdTheme} })
        } catch (error) {
            next(error)
        }
    },

    async getAll(req, res, next) {
        try {
            const themes = await ThemesService.getAll()
            
            return res.status(200).json({ success: true, message: "Теми успішно знайдено", data: {themes: themes} })
        } catch (error) {
            next(error)
        }
    },

    async getById(req, res, next) {
        try {
            const theme = await ThemesService.getById(req.params.id)
            
            return res.status(200).json({ success: true, message: "Тему успішно знайдено", data: {theme: theme} })
        } catch (error) {
            next(error)
        }
    }
}

export { ThemeController }