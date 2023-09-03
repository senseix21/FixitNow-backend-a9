"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const passwordHash_1 = require("../../middlewares/passwordHash");
const router = express_1.default.Router();
router.get('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getAll);
router.get('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), passwordHash_1.hashPassword, (0, validateRequest_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.update);
router.delete('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.deleteOne);
exports.UserRoutes = router;
