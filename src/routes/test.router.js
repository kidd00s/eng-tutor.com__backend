import { Router } from "express";
import { TestController } from "../controllers/test.controller.js";
import { createTestSchemaValidator, updateTestSchemaValidator, checkTest } from "../validators/test.validator.js";


const testRouter = Router()

// POST  на /test/new
testRouter.post("/new", checkTest(createTestSchemaValidator), TestController.create)

export { testRouter }