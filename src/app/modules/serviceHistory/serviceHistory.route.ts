import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { ServiceHistoryController } from "./serviceistory.controller";

const router = express.Router();

router.get("/",
    authenticate(ENUM_USER_ROLE.USER),
    ServiceHistoryController.getServiceHistoryByUser);

export const ServiceHistoryRoutes = router;