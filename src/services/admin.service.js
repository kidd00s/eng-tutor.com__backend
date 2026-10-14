import { Admins } from "../repositories/admin.repository.js";

const AdminService = {
    async getAdmin(userId) {
        try {

            const exAdmin = await Admins.findById(userId)

            if(!exAdmin) return null

            return exAdmin
        } catch (error) {
            console.log(`[AdminService.getAdmin] - ${error.message}`)
            return null
        }
    }
}

export { AdminService }