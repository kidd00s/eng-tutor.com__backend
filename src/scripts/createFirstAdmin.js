import { Admins } from "../repositories/admin.repository.js";

async function createFirstAdmin() {
    try {
        const admins = await Admins.findAll()


        if (!admins || admins.length === 0 || !Array.isArray(admins)) {        // Перевірка на тип даних масив
            const newAdmin = await Admins.create({
                name: "Admin",
                email: "admin@gmail.com",
                password: "1111",
                role: "owner"
            })

            if (newAdmin) console.log(`
Перевіряємо чи є амдіністратор...
Адміністратора немає, починаємо створення
Нового адміна створено
Логін:  ${newAdmin.name}
Пароль: ${newAdmin.password}
`)
        } else {
            console.log(`
Перевіряємо чи є адміністратор...
Адміністратор уже існує!
`)

        }


        return null
    } catch (error) {
        console.log(error.message)
    }
}

export { createFirstAdmin }

