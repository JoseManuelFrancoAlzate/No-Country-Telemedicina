// routes/index.js
import express from "express";

import { doctorRouter } from "./doctorRouter.js";
import { userRouter } from "./userRouter.routes.js";
import { countryRouter } from "./countryRouter.routes.js";
import { medicalRecordRouter } from "./medicalRecordRouter.routes.js";
import { loginRouter } from "./login.routes.js";
import { appointmentsRouter } from "./appointments.routes.js";
import { specialityRouter } from "./specialityRouter.routes.js";

const router = express.Router();

router.use("/doctors", doctorRouter);
router.use("/auth", loginRouter);
router.use("/users", userRouter);
router.use("/countries", countryRouter);
router.use("/medicalRecords", medicalRecordRouter);
router.use("/appointments", appointmentsRouter);
router.use("/specialities", specialityRouter);

// pagina 404  
router.use((req, res) => {
  res.status(404).send("404 Not Found");
});

export { router };
