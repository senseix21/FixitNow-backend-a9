"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const content_controller_1 = require("./content.controller");
const content_validation_1 = require("./content.validation");
const router = express_1.default.Router();
// Route to create a new content
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(content_validation_1.ContentValidation.createContentZodSchema), content_controller_1.ContentController.createContent);
// Route to get a specific content by ID
router.get('/:contentId', content_controller_1.ContentController.getContentById);
// Route to update an existing content by ID
router.put('/:contentId', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(content_validation_1.ContentValidation.updateContentZodSchema), content_controller_1.ContentController.updateContent);
// Route to delete a specific content by ID
router.delete('/:contentId', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), content_controller_1.ContentController.deleteContent);
// Route to get all contents
router.get('/', content_controller_1.ContentController.getAllContent);
exports.ContentRoutes = router;
