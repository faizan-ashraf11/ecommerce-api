import {StatusCodes} from "http-status-codes";

export default class StatusCode {
    message: any;
    detail: string;
    status: any;
    statusCode: number;

    constructor(message: string, detail: string, errorCode: number, status: number) {
        this.message = message;
        this.detail = detail;
        this.statusCode = errorCode;
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

export const Not_Found: StatusCode = new StatusCode(
    "Error",
    "Given Entity Not Found!",
    StatusCodes.NOT_FOUND,
    StatusCodes.NOT_FOUND
);

export const Product_REMOVED: StatusCode = new StatusCode(
    "Removed",
    "Product Removed Successfully!",
    StatusCodes.CREATED,
    StatusCodes.CREATED
);

export const Cart_REMOVED: StatusCode = new StatusCode(
    "Removed",
    "Product Removed From Cart Successfully!",
    StatusCodes.CREATED,
    StatusCodes.CREATED
);

export const Favorite_REMOVED: StatusCode = new StatusCode(
    "Removed",
    "Product Removed From Favorites Successfully!",
    StatusCodes.CREATED,
    StatusCodes.CREATED
);

export const Product_Updated: StatusCode = new StatusCode(
    "Product Updated",
    "Product Updated Successfully!",
    StatusCodes.CREATED,
    StatusCodes.CREATED
);

export const Product_Not_Found: StatusCode = new StatusCode(
    "Not Found",
    "Product Not Found!",
    StatusCodes.NOT_FOUND,
    StatusCodes.NOT_FOUND
);