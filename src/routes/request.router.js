import { Router } from "express";
import { checkRequest } from "../validators/request.validator.js";
import { RequestsController } from "../controllers/request.controller.js";

const requestRouter = Router()

// POST  на /request/new
requestRouter.post("/new", checkRequest, RequestsController.create)

// GET  на /request/get
requestRouter.get("/get", checkRequest, RequestsController.getAll)

// POST  на /request/get/:id
requestRouter.post("/get/:id", checkRequest, RequestsController.getById)

export {requestRouter}