import HttpException from "common/exceptions/httpException";
import { NextFunction } from "express";
import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: NextFunction): void {
        console.log('error ==> \n' , error);
        response.status(error.httpCode).send(new HttpException(error.httpCode , resolverErrorMessage(error?.message , error?.detail) , resolverErrorDetail(error?.message , error?.detail) , error.errorCode))
    }
}

function resolverErrorMessage(message: string, detail: string): string {
    if (detail == undefined) {
        return '';
    }
    return message;
}

function resolverErrorDetail(message: string, detail: string): string {
    if (detail == undefined) {
        return message
    }
    return detail;
}