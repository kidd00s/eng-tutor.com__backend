import { AuthService } from "../services/auth.service.js"


const AuthController = {
    async create(req, res) {
        try {
            const newAdmin = await AuthService.create(req.newUser)

            if (!newAdmin) return res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })

            
            return res.status(200).json({ success: true, message: "Тест успішно створено", data: {admin: newAdmin} })
        } catch (error) {
            console.log(`[AuthController.create] - ${error.message}`)
            res.status(500).json({ success: false, message: "Ой халепа, щось пішло не так" })
        }
    }
}

export { AuthController }