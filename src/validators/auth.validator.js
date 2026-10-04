import { z } from "zod";

const loginSchema = z.object({
  adminData: z.object({
    email: z.string().email("Логін або пароль не вірний"),
    password: z.string().min(1, "Логін або пароль не вірний"),
  }, {required_error: "Заповніть поля"})
})

async function checkDataToLogin(req, res, next) {
  const result = loginSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message, success: false })
  }

  const { adminData } = result.data
  req.adminData = {email: adminData.email, password: adminData.password}
  next()
}

export { checkDataToLogin }