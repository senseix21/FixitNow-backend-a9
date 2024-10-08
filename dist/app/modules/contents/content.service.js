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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createContent = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield prisma_1.prisma.content.create({
        data,
    });
    return content;
});
const getAllContent = () => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield prisma_1.prisma.content.findMany();
    return content;
});
const getContentById = (contentId) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield prisma_1.prisma.content.findUnique({
        where: {
            id: contentId,
        },
    });
    return content;
});
const updateContent = (contentId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield prisma_1.prisma.content.update({
        where: {
            id: contentId,
        },
        data,
    });
    return content;
});
const deleteContent = (contentId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.content.delete({
        where: {
            id: contentId,
        },
    });
});
exports.ContentService = {
    createContent,
    getAllContent,
    getContentById,
    updateContent,
    deleteContent,
};
