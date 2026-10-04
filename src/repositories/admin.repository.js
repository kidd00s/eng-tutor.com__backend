import { AdminModel } from "../models/Admin.model.js"

const Admins = {
    async findAll() {
        try {
            const admins = await AdminModel.find()
            return admins
        } catch (error) {
            console.log(`[Admins.findAll]: ${error.message}`)
            return null
        }
    },

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
            const foundAdmin = await AdminModel.findOne({ email: adminEmail })
            return foundAdmin
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