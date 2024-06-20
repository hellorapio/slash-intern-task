import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return await this.prisma.products.create({ data });
  }

  async findAll() {
    return await this.prisma.products.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.products.findUnique({ where: { id } });
  }
}
