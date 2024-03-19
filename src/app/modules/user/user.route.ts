import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { UserController } from "./user.controller";

const router = express.Router();
router.get('/', authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    UserController.getAll);

router.get("/",
    authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
    UserController.getProfile);

router.patch('/',
    authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.USER),
    UserController.updateProfile);


export const ProfileRoutes = router;