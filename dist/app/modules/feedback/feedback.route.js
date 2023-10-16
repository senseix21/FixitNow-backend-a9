"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feedback_controller_1 = require("./feedback.controller");
const feedback_validation_1 = require("./feedback.validation");
const router = (0, express_1.Router)();
// Route for creating user feedback
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidation.createFeedbackZodSchema), feedback_controller_1.FeedbackController.createFeedback);
// Route for getting a single user feedback
router.get('/:id', feedback_controller_1.FeedbackController.getFeedbackById);
// Route for updating user feedback
router.put('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(feedback_validation_1.FeedbackValidation.createFeedbackZodSchema), (feedback_controller_1.FeedbackController.updateFeedback));
// Route for deleting user feedback
router.delete('/:id', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), (feedback_controller_1.FeedbackController.deleteFeedback));
// Route for listing all user feedbacks
router.get('/', (feedback_controller_1.FeedbackController.getAllFeedback));
exports.FeedbackRoutes = router;
