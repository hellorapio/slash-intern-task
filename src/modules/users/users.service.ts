import { Injectable } from "@nestjs/common";
import CreateUserDto from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.users.create({
      data: { ...data, cart: { create: {} } },
    });
    // await this.prisma.cart.create({
    //   data: {
    //     userId: user.id,
    //   },
    // });
    delete user.password;
    return user;
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({ where: { id } });
  }

  async getUserOrders(id: number) {
    return await this.prisma.users.findUnique({ where: { id } }).orders();
  }
}
