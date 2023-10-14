import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.service";


const create = catchAsync(async (req, res) => {
    const result = await CategoryService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Category created successfully!",
        data: result
    })
})
const getAll = catchAsync(async (req, res) => {
    const result = await CategoryService.getAll();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Categories retrieved successfully!",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const result = await CategoryService.getSingle(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Category retrieved successfully!",
        data: result
    })
});


const update = catchAsync(async (req, res) => {
    const result = await CategoryService.update(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Category updated successfully!",
        data: result
    })
});


const deleteOne = catchAsync(async (req, res) => {
    const result = await CategoryService.deleteOne(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Category deleted successfully!",
        data: result
    })
});




export const CategoryController = {
    create,
    getAll,
    getSingle,
    update,
    deleteOne
}