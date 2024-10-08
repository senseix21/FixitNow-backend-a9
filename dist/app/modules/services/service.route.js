"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.post('/create-Service', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(service_validation_1.ServicesValidation.createServiceZodSchema), service_controller_1.ServicesController.create);
router.get('/', service_controller_1.ServicesController.getAll);
router.get('/:id', service_controller_1.ServicesController.getSingle);
router.get('/category/:categoryId', service_controller_1.ServicesController.getByCategory);
router.patch('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(service_validation_1.ServicesValidation.UpdateServiceZodSchema), service_controller_1.ServicesController.update);
router.delete('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), service_controller_1.ServicesController.deleteOne);
exports.ServicesRoutes = router;
