import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { checkDataToLogin } from "../validators/auth.validator.js";

const authRouter = Router()

// POST  на /auth/login
authRouter.post("/login", checkDataToLogin, AuthController.login)

export {authRouter}