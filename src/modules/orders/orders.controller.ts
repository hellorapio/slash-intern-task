import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";

@Controller("orders")
export class OrdersController {
  @Post("/")
  async createOrder() {}

  @Put("/:id/status")
  async updateStatus() {}

  @Get("/:id")
  async orderDetails(@Param("id", ParseIntPipe) id: number) {}
}
