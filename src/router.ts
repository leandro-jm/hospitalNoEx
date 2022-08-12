import { Router } from "express";
import HospitalController from "./useCase/hospital/HospitalController";
import StatusController from "./useCase/status/StatusController";

const router: Router = Router();

//Routes Status
router.get("/status/ping", (request, response) => {
     const controller = new StatusController();
     return response.send(controller.ping());
});

//Routes Hospital
router.get("/patients", (request, response) => {
     const controller = new HospitalController();
     return response.send(controller.patients());
});

export { router };