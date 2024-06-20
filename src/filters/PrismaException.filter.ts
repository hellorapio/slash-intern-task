import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception.code === "P2002") {
      return response.json({
        statusCode: 409,
        message: "the email already Exists",
      });
    }

    response.json({
      statusCode: 500,
      message: "Internal Server error",
    });
  }
}
