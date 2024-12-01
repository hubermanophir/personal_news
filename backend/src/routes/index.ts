import { Router, Request, Response } from "express";
import recommendationsRouter from "./recommendations";
import usersRouter from './users'

const router = Router();

router.use("/recommendations", recommendationsRouter);
router.use("/users", usersRouter);

export default router;
