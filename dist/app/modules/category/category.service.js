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
exports.CategoryService = void 0;
const prisma_1 = require("../../../shared/prisma");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.create({
        data: payload
    });
    return result;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findMany({
        orderBy: {
            name: "asc"
        },
        include: {
            service: true,
        }
    });
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findUnique({
        where: {
            id: id
        },
        include: {
            service: true
        }
    });
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.update({
        where: { id: id },
        data: payload,
    });
    return result;
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.delete({
        where: { id: id },
    });
    return result;
});
exports.CategoryService = {
    create,
    getAll,
    getSingle,
    update,
    deleteOne,
};
