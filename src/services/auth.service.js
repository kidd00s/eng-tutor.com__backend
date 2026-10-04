import  jwt  from "jsonwebtoken";
import { ADMIN_CONF } from "../config/admin.config.js"
import { Admins } from "../repositories/admin.repository.js";

const AuthService = {
    async login(adminData) {
        try {
            const { email, password } = adminData

            const exAdmin = await Admins.findByEmail(email)

            if(!exAdmin) return null
            if (exAdmin.password !== password) return null

            const token = jwt.sign(
                { userId: exAdmin._id },
                ADMIN_CONF.JWT_KEY,
                { expiresIn: ADMIN_CONF.jwtExpires }
            )

            return token
        } catch (error) {
            console.log(`[AuthService.login] - ${error.message}`)
            return null
        }
    }
}

export { AuthService }