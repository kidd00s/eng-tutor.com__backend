import { Router } from "express";
import { TestController } from "../controllers/test.controller.js";
import { createTestSchemaValidator, updateTestSchemaValidator, checkTest } from "../validators/test.validator.js";
import { checkAdmin } from "../middlewares/auth.middleware.js";


const testRouter = Router()

// POST  на /test/new
testRouter.post("/new", checkAdmin, checkTest(createTestSchemaValidator), TestController.create)

// GET  на /test/get
testRouter.get("/get", checkAdmin, TestController.getAll)

// GET  на /test/get/:id
testRouter.get("/get/:id", checkAdmin, TestController.getById)


export { testRouter }