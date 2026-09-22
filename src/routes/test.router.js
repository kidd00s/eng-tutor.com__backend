import { Router } from "express";
import { TestController } from "../controllers/test.controller.js";
import { checkTest } from "../validators/test.validator.js";

const testRouter = Router()

// POST  на /test/new
testRouter.post("/new", checkTest, TestController.create)

export { testRouter }