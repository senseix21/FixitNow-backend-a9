"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), cart_controller_1.CartController.addToCart);
router.get('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), cart_controller_1.CartController.getCartItems);
router.delete('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), cart_controller_1.CartController.removeFromCart);
exports.CartRoutes = router;
