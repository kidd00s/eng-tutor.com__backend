import { AuthService } from "../services/auth.service.js"


const AuthController = {
    async login(req, res) {
         try {
             const token = await AuthService.login(req.adminData)

             if (!token) return res.status(500).json({ success: false, message: "У вас немає прав адміністратора" })

            
             return res.status(200).json({ success: true, message: "Ви авторизувались", data: { token } })
         } catch (error) {
             console.log(`[AuthController.login] - ${error.message}`)
             res.status(500).json({ success: false, message: "Тест не створено" })
         }
    }
}

export { AuthController }