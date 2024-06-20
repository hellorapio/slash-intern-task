import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import CreateCouponDto from "./dtos/create-coupon.dto";

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}

  async create(createCouponDto: CreateCouponDto) {
    return await this.prisma.coupons.create({
      data: createCouponDto,
    });
  }

  async findAll() {
    return await this.prisma.coupons.findMany();
  }
}
