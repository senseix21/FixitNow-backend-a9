"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const order_service_1 = require("./order.service");
const jwthelpers_1 = require("../../../helpers/jwthelpers");
const config_1 = __importDefault(require("../../../config"));
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.headers.authorization;
    const decodedToken = jwthelpers_1.jwtHelpers.verifyToken(accessToken, config_1.default.jwt.secret);
    const userId = decodedToken.userId;
    const { orderedBooks } = req.body;
    const result = yield order_service_1.OrderService.create(orderedBooks, userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order created successfully!",
        data: result
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, pick_1.default)(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
    const accessToken = req.headers.authorization;
    const decodedToken = jwthelpers_1.jwtHelpers.verifyToken(accessToken, config_1.default.jwt.secret);
    const role = decodedToken.role;
    const id = decodedToken.userId;
    const result = yield order_service_1.OrderService.getAll(options, role, id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Orders retrieved successfully!",
        meta: result.meta,
        data: result.data
    });
}));
const getSingle = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.headers.authorization;
    const decodedToken = jwthelpers_1.jwtHelpers.verifyToken(accessToken, config_1.default.jwt.secret);
    const role = decodedToken.role;
    const user = decodedToken.userId;
    const id = req.params.id;
    const result = yield order_service_1.OrderService.getSingle(user, role, id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order retrieved successfully!",
        data: result
    });
}));
const deleteOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.deleteOne(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order deleted successfully!",
        data: result
    });
}));
exports.OrderController = {
    create,
    getAll,
    getSingle,
    deleteOne
};
