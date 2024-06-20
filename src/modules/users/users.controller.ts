import { UsersService } from "./users.service";
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import CreateUserDto from "./dtos/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/")
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get("/")
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.usersService.findOne(id);
  }

  @Get("/:id/orders")
  async getUserOrders(@Param("id", ParseIntPipe) id: number) {
    return await this.usersService.getUserOrders(id);
  }
}
