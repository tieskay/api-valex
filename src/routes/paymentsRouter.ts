import { Router } from "express";
import * as paymentController from "../controllers/paymentsController.js";
import validateSchema from "../middlewares/validateSchema.js";
import schemas from "../schemas/index.js";

const paymentsRouter = Router();

paymentsRouter.post(
  "/point-of-sale",
  validateSchema(schemas.paymentSchema),
  paymentController.insertPayment
);

paymentsRouter.post(
  "/online",
  validateSchema(schemas.onlinePaymentSchema),
  paymentController.insertOnlinePayment
);

export default paymentsRouter;
