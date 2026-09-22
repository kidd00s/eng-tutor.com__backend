import { AdminModel } from "../models/Admin.model.js"

const Admins = {
    async create(admin) {
        try {
            const newAdmin = await AdminModel.create(admin)
            return newAdmin
        } catch (error) {
            console.log(`[Admins.create]: ${error.message}`)
            return null
        }
    },

    async findByEmail(adminEmail) {
        try {
            const newAdmin = await AdminModel.find(adminEmail)
            return newAdmin
        } catch (error) {
            console.log(`[Admins.findByEmail]: ${error.message}`)
            return null
        }
    },

    async deleteById(adminId) {
        try {
            const deletedAdmin = await AdminModel.findByIdAndDelete(adminId)
            return deletedAdmin
        } catch (error) {
            console.log(`[Admins.deleteById]: ${error.message}`)
            return null
        }
    },
    async updateById(adminId) {
        try {
            const updatedAdmin = await AdminModel.findByIdAndUpdate(adminId)
            return updatedAdmin
        } catch (error) {
            console.log(`[Admins.updateById]: ${error.message}`)
            return null
        }
    },
    async changeRoleById(adminId, newRole) {
        try {
            const updatedAdmin = await AdminModel.findByIdAndUpdate(adminId, {
                role: newRole
            })
            return updatedAdmin
        } catch (error) {
            console.log(`[Admins.changeRoleById]: ${error.message}`)
            return null
        }
    },

}

export { Admins }