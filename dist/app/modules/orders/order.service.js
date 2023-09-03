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
exports.OrderService = void 0;
const prisma_1 = require("../../../shared/prisma");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const user_1 = require("../../../enums/user");
const create = (orderedBooks, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.create({
        data: {
            userId: userId,
            orderedBooks: orderedBooks
        }
    });
    return result;
});
const getAll = (options, role, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const andConditions = [];
    if (role === user_1.ENUM_USER_ROLE.CUSTOMER) {
        andConditions.push({
            userId: id
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.prisma.order.findMany({
        skip,
        take: size,
        where: whereConditions,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }
    });
    const total = yield prisma_1.prisma.order.count({ where: whereConditions });
    return {
        meta: {
            page: page,
            size: size,
            total: total,
            totalPage: Math.floor(total / size + 1)
        },
        data: result
    };
});
const getSingle = (user, role, id) => __awaiter(void 0, void 0, void 0, function* () {
    const andConditions = [];
    if (role === user_1.ENUM_USER_ROLE.CUSTOMER) {
        andConditions.push({
            userId: user,
            id: id
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {
        id: id,
    };
    const result = yield prisma_1.prisma.order.findFirst({
        where: whereConditions
    });
    return result;
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.delete({
        where: { id: id },
    });
    return result;
});
exports.OrderService = {
    create,
    getAll,
    getSingle,
    deleteOne
};
