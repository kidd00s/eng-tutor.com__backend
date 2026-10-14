import { Router } from "express";
import { ArticleController } from "../controllers/article.controller.js";
import { checkAdmin } from "../middlewares/auth.middleware.js";
const articleRouter = Router()

// POST  на /article/generate
articleRouter.post("/generate", checkAdmin, ArticleController.generate)

// GET  на /article/get-all
articleRouter.get("/get-all", ArticleController.getAll)

// GET  на /article/get/:[slug]
articleRouter.get("/get/:slug", ArticleController.getBySlug)

export {articleRouter}