import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";


const authRouter = Router()

// POST  на /auth/new
authRouter.post("/new", AuthController.create)

export {authRouter}