import express from "express";
import ServiceController from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", ServiceController.createService);
router.put("/", ServiceController.updateService);
router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getService);
router.delete("/:id", ServiceController.deleteService);

export default router;