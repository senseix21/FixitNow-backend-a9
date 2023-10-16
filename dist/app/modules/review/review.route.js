"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const review_controller_1 = require("./review.controller");
const review_validation_1 = require("./review.validation");
const router = express_1.default.Router();
// Create a new review
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(review_validation_1.ReviewValidation.reviewCreateSchema), review_controller_1.ReviewController.createReview);
// Get reviews for a specific service
router.get('/service/:serviceId', review_controller_1.ReviewController.getReviewsByService);
// Update a review by reviewId
router.put('/:reviewId', (0, validateRequest_1.default)(review_validation_1.ReviewValidation.reviewUpdateSchema), review_controller_1.ReviewController.updateReview);
// Delete a review by reviewId
router.delete('/:reviewId', review_controller_1.ReviewController.deleteReview);
exports.ReviewRoutes = router;
