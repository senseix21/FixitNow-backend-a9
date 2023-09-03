"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const categories_controller_1 = require("./categories.controller");
const categories_validation_1 = require("./categories.validation");
const router = express_1.default.Router();
router.post('/create-category', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(categories_validation_1.CategoryValidation.createCategoryZodSchema), categories_controller_1.CategoryController.create);
router.get('/', categories_controller_1.CategoryController.getAll);
router.get('/:id', categories_controller_1.CategoryController.getSingle);
router.patch('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(categories_validation_1.CategoryValidation.UpdateCategoryZodSchema), categories_controller_1.CategoryController.update);
router.delete('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categories_controller_1.CategoryController.deleteOne);
exports.CategoryRoutes = router;
