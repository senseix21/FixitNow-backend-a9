import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constants";


const create = catchAsync(async (req, res) => {
    const result = await BookService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Book created successfully!",
        data: result
    })
})
const getAll = catchAsync(async (req, res) => {
    const filters = pick(req.query, bookFilterableFields)
    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);

    const result = await BookService.getAll(filters, options);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Books retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getByCategory = catchAsync(async (req, res) => {
    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
    const result = await BookService.getByCategory(req.params.categoryId, options);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Books retrieved successfully!",
        meta: result.meta,
        data: result.data
    })

})

const getSingle = catchAsync(async (req, res) => {
    const result = await BookService.getSingle(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Book retrieved successfully!",
        data: result
    })
});


const update = catchAsync(async (req, res) => {
    const result = await BookService.update(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Book updated successfully!",
        data: result
    })
});


const deleteOne = catchAsync(async (req, res) => {
    const result = await BookService.deleteOne(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Book deleted successfully!",
        data: result
    })
});




export const BookController = {
    create,
    getAll,
    getByCategory,
    getSingle,
    update,
    deleteOne
}