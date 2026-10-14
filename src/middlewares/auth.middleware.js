import  jwt  from "jsonwebtoken";
import { ADMIN_CONF } from "../config/admin.config.js"
import { AdminService } from "../services/admin.service.js";

const checkAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if(!token) return res.status(401).json({ message: "У вас немає доступу",success: false })

        const decoded = jwt.verify(token, ADMIN_CONF.JWT_KEY)

        if(!decoded.userId) return res.status(401).json({ message: "У вас немає доступу",success: false })
        
        const admin = await AdminService.getAdmin(decoded.userId)

        if(!admin) return res.status(401).json({ message: "У вас немає доступу",success: false })

        req.admin = admin

        next()
    } catch (error) {
        console.log(`[checkAdmin] - ${error.message}`)
        res.status(500).json({ success: false, message: "Помилка при перевірці адміністратора" })
    }
}

export {checkAdmin}