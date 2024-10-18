import {StatusCodes} from "http-status-codes";

export default class StatusCode {
    message: any;
    detail: string;
    status: any;
    errorCode: number;

    constructor(message: string, detail: string, errorCode: number, status: number) {
        this.message = message;
        this.detail = detail;
        this.errorCode = errorCode;
        this.status = status;
    }
}

export const CREATED: StatusCode = new StatusCode(
    "Created",
    "Operation Success",
    StatusCodes.CREATED,
    StatusCodes.CREATED
);

export const SUCCESS: StatusCode = new StatusCode(
    "Success",
    "Operation Success",
    StatusCodes.OK,
    StatusCodes.OK);

export const INTERNAL_SERVER_ERROR: StatusCode = new StatusCode(
    "Error",
    "Internal Server Error",
    StatusCodes.INTERNAL_SERVER_ERROR,
    StatusCodes.INTERNAL_SERVER_ERROR);

export const BAD_REQUEST: StatusCode = new StatusCode(
    "Error",
    "Bad Request Error",
    StatusCodes.BAD_REQUEST,
    StatusCodes.BAD_REQUEST);
