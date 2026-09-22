import { Schema, model } from "mongoose";
import { ADMIN_CONF } from "../config/admin.config.js";

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        reqired: true
    },
    
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: ADMIN_CONF.roles
    }
}, {
    timestamps: true
})


const AdminModel = model("admins", adminSchema)

export {AdminModel}