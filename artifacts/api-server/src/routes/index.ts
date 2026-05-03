import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import newsRouter from "./news";
import eventsRouter from "./events";
import teamRouter from "./team";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(newsRouter);
router.use(eventsRouter);
router.use(teamRouter);

export default router;
