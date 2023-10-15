import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { serviceFilterableFields } from "./service.constants";
import { ServicesService } from "./services.service";


const create = catchAsync(async (req, res) => {
    const result = await ServicesService.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service created successfully!",
        data: result
    })
})
const getAll = catchAsync(async (req, res) => {
    const filters = pick(req.query, serviceFilterableFields)
    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);

    const result = await ServicesService.getAll(filters, options);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Servicess retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getByCategory = catchAsync(async (req, res) => {
    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
    const result = await ServicesService.getByCategory(req.params.categoryId, options);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Services retrieved successfully!",
        meta: result.meta,
        data: result.data
    })

})

const getSingle = catchAsync(async (req, res) => {
    const result = await ServicesService.getSingle(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service retrieved successfully!",
        data: result
    })
});


const update = catchAsync(async (req, res) => {
    const result = await ServicesService.update(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service updated successfully!",
        data: result
    })
});


const deleteOne = catchAsync(async (req, res) => {
    const result = await ServicesService.deleteOne(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service deleted successfully!",
        data: result
    })
});




export const ServicesController = {
    create,
    getAll,
    getByCategory,
    getSingle,
    update,
    deleteOne
}