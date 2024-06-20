import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

@Controller()
export class AppController {
  @ApiOkResponse({ description: "Server is live" })
  @Get()
  getHello() {
    return { status: "Server is live" };
  }
}
