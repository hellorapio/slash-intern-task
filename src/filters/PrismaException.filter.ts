import { Catch } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Catch(PrismaClientKnownRequestError)
export default class PrismaExceptionFilter {
  catch(error: any) {
    console.log(error);
  }
}
