import { Admins } from "../repositories/admin.repository.js";
import { AppError } from "../errors/create.error.js"

const AdminService = {
    async getAdmin(userId) {
            const exAdmin = await Admins.findById(userId)

            if(!exAdmin) throw new AppError("Доступу немає", 404)

            return exAdmin
    }
}

export { AdminService }