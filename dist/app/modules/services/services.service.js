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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const prisma_1 = require("../../../shared/prisma");
const service_constants_1 = require("./service.constants");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.create({
        data: payload,
        include: {
            category: true
        }
    });
    return result;
});
const getAll = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const { search, maxPrice, minPrice } = filters, filtersData = __rest(filters, ["search", "maxPrice", "minPrice"]);
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: service_constants_1.serviceSearchableFields.map((field) => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive'
                }
            }))
        });
    }
    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: filtersData[key]
                }
            }))
        });
    }
    if (minPrice !== undefined && maxPrice !== undefined) {
        andConditions.push({
            price: {
                gte: minPrice,
                lte: maxPrice
            }
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma_1.prisma.service.findMany({
        skip,
        take: size,
        where: whereConditions,
        include: {
            category: true,
            Review: true,
        },
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }
    });
    const total = yield prisma_1.prisma.service.count({ where: whereConditions });
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
const getByCategory = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(options);
    const result = yield prisma_1.prisma.service.findMany({
        skip,
        take: size,
        where: ({
            categoryId: {
                equals: id
            },
        })
    });
    const total = yield prisma_1.prisma.service.count({
        where: ({
            categoryId: {
                equals: id
            },
        })
    });
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
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.findUnique({
        where: {
            id: id
        },
    });
    return result;
});
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.update({
        where: { id: id },
        data: payload,
    });
    return result;
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.service.delete({
        where: { id: id },
    });
    return result;
});
exports.ServicesService = {
    create,
    getAll,
    getSingle,
    getByCategory,
    update,
    deleteOne
};
