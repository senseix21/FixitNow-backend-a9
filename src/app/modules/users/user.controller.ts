import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";

const getAll = catchAsync(async (req, res) => {
    const result = await UserService.getAll();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Users retrieved successfully!",
        data: result
    })
});

const getSingle = catchAsync(async (req, res) => {
    const result = await UserService.getSingle(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User retrieved successfully!",
        data: result
    })
});


const update = catchAsync(async (req, res) => {
    const result = await UserService.update(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User updated successfully!",
        data: result
    })
});


const deleteOne = catchAsync(async (req, res) => {
    const result = await UserService.deleteOne(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User deleted successfully!",
        data: result
    })
});




export const UserController = {
    getAll,
    getSingle,
    update,
    deleteOne
}