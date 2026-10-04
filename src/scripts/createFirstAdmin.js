import { Admins } from "../repositories/admin.repository.js";

async function createFirstAdmin() {
    try {
        const admins = await Admins.findAll()

        if(!admins || admins.length === 0 || typeof admins !== "array") {        // Перевірка на тип даних масив
            const newAdmin = await Admins.create({
                name: "Admin",
                email: "admin@gmail.com",
                password: "1111",
                role: "owner"
            })

            if (newAdmin) {
                console.log("Нового адміна створено")
            } else {
                console.log("Помилка при створенні адміністратора")
            }

            return
        }

        console.log("В базі є адмін")
    } catch (error) {
        console.log(error.message)
    }
}

export { createFirstAdmin }

