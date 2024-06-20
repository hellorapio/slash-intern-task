import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import CreateOrderDto from "./dtos/create-order.dto";
import UpdateStatusDto from "./dtos/update-status.dto";
import ApplyCouponDto from "./dtos/apply-coupon.dto";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post("/")
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Put("/:id/status")
  async updateStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateStatusDto: UpdateStatusDto
  ) {
    return this.ordersService.updateStatus(id, updateStatusDto);
  }

  @Get("/:id")
  async orderDetails(@Param("id", ParseIntPipe) id: number) {
    return this.ordersService.orderDetails(id);
  }

  @Post("/apply-coupon")
  async applyCoupon(@Body() coupon: ApplyCouponDto) {
    return this.ordersService.applyCoupon(coupon);
  }
}
