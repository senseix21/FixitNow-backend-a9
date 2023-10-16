"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const passwordHash_1 = require("../../middlewares/passwordHash");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("../auth/auth.validation");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), passwordHash_1.hashPassword, (0, validateRequest_1.default)(auth_validation_1.AuthValidataion.signUpValidationZodSchema), admin_controller_1.AdminAuthController.signUp);
router.post('/super-admin-signup', passwordHash_1.hashPassword, (0, validateRequest_1.default)(auth_validation_1.AuthValidataion.signUpValidationZodSchema), admin_controller_1.AdminAuthController.signUp);
router.post('/admin-signin', admin_controller_1.AdminAuthController.login);
exports.AdminAuthRoutes = router; // 
