"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHistoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const serviceistory_controller_1 = require("./serviceistory.controller");
const router = express_1.default.Router();
router.get("/", (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), serviceistory_controller_1.ServiceHistoryController.getServiceHistoryByUser);
exports.ServiceHistoryRoutes = router;
