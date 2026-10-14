import  jwt  from "jsonwebtoken";
import { ADMIN_CONF } from "../config/admin.config.js"
import { Admins } from "../repositories/admin.repository.js";
import { AppError } from "../errors/create.error.js"

const AuthService = {
    async login(adminData) {
            const { email, password } = adminData

            const exAdmin = await Admins.findByEmail(email)

            if(!exAdmin) throw new AppError("Доступ заборонено", 403)
            if(exAdmin.password !== password) throw new AppError("Доступ заборонено", 403)

            const token = jwt.sign(
                { userId: exAdmin._id },
                ADMIN_CONF.JWT_KEY,
                { expiresIn: ADMIN_CONF.jwtExpires }
            )

            return token
    }
}

export { AuthService }