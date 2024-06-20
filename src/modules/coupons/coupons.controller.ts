import {
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import CreateCouponDto from "./dtos/create-coupon.dto";
import { CouponsService } from "./coupons.service";

@Controller("coupons")
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}
  
  @Post("/")
  async create(@Body() createCouponDto: CreateCouponDto) {
    return await this.couponsService.create(createCouponDto);
  }

  @Get("/")
  async findAll() {
    return await this.couponsService.findAll();
  }
}
