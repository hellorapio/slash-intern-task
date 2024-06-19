import { UsersService } from "./users.service";
import { Body, Controller, Post } from "@nestjs/common";
import CreateUserDto from "./dtos/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/")
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }
}
