import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import CreateUserDto from "./dtos/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return await this.prisma.user.create({ data });
  }
}
