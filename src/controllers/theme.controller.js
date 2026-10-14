import { ThemesService } from "../services/theme.service.js"


const ThemeController = {
    async create(req, res) {
        try {
            const createdTheme = await ThemesService.create(req.newTheme)

            if (!createdTheme) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тему успішно створено", data: {theme: createdTheme} })
        } catch (error) {
            console.log(`[ThemeController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

    async getAll(req, res) {
        try {
            const themes = await ThemesService.getAll()

            if (!themes) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Теми успішно знайдено", data: {theme: themes} })
        } catch (error) {
            console.log(`[ThemeController.getAll] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    },

    async getById(req, res, themeId) {
        try {
            const theme = await ThemesService.getById(themeId)

            if (!theme) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тему успішно знайдено", data: {theme: theme} })
        } catch (error) {
            console.log(`[ThemeController.getById] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { ThemeController }