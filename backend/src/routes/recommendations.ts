import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(`${req.query.limit} limit`);

  res.send("In recommendations route");
});

export default router;
