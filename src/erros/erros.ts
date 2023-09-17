import { CustomError } from "../protocols/error.protocols"

function notFound(resource: string = "Item"): CustomError {
    return {
        type: "notFound", 
        message: `${resource} não foi encontrado(a)!`
    }
}

function conflict(resource: string) : CustomError {
    return {
        type: "conflict", 
        message: `${resource ? resource : "Item"} já existe!`
    }
}

function conflictForBeingEqual(resource: string) : CustomError {
    return {
        type: "conflict", 
        message: `${resource} devem ser diferentes!`
    }
}

function  InternalServerError(): CustomError {
    return {
        type: "InternalServerError", 
        message: "Desculpe, houve um erro!"
    }
}

function  UnprocessableEntityforDate(): CustomError {
    return {
        type: "UnprocessableEntityforDate", 
        message: "A data do voo deve ser maior que a data atual!"
    }
}

function  UnprocessableEntity(): CustomError {
    return {
        type: "UnprocessableEntity", 
        message: "Unprocessable Entity!"
    }
}

function  BadRequest(): CustomError {
    return {
        type: "BadRequest", 
        message: "Bad Request!"
    }
}

export const errors = {notFound, conflict, InternalServerError, conflictForBeingEqual, UnprocessableEntityforDate, BadRequest, UnprocessableEntity};