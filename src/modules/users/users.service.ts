import { HttpException, Injectable } from "@nestjs/common";
import CreateUserDto from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.users.create({
      data: { ...data, cart: { create: {} } },
    });

    delete user.password;
    return user;
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({ where: { id } });

    if (!user) throw new HttpException("User not found", 404);
  }

  async getUserOrders(id: number) {
    const orders = await this.prisma.users
      .findUnique({ where: { id } })
      .orders();

    if (orders === null) throw new HttpException("User not found", 404);
    if (orders.length === 0) return { message: "No orders found" };

    return orders;
  }
}
