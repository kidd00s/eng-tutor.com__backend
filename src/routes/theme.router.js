import { Router } from "express";
import { ThemeController } from "../controllers/theme.controller.js";
import { checkTheme } from "../validators/theme.validator.js";
import { checkAdmin } from "../middlewares/auth.middleware.js";

const themeRouter = Router()

// POST  на /theme/new
themeRouter.post("/new", checkAdmin, checkTheme, ThemeController.create)

// GET  на /theme/get
themeRouter.get("/get", checkAdmin, ThemeController.getAll)

// GET  на /theme/get/:id
themeRouter.get("/get/:id", checkAdmin, ThemeController.getById)

export { themeRouter }