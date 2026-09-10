import express from "express";

import { AVAILABLE } from "../mock/available.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ available: AVAILABLE });
});

export default router;
