import { AuthService } from "../services/auth.service.js"


const AuthController = {
    async login(req, res, next) {
         try {
             const token = await AuthService.login(req.adminData)

            
             return res.status(200).json({ success: true, message: "Ви авторизувались", data: { token } })
         } catch (error) {
             console.log(`[AuthController.login] - ${error.message}`)
             next(error)
         }
    }
}

export { AuthController }