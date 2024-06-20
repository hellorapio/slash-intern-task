import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import AddProductDto from "./dtos/add-product.dto";
import DeleteProductDto from "./dtos/delete-product.dto";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get("/:id")
  async getUserCart(@Param("id", ParseIntPipe) id: number) {
    return await this.cartService.getUserCart(id);
  }

  @Post("/add")
  async add(@Body() data: AddProductDto) {
    return await this.cartService.add(data);
  }

  @Put("/update")
  async update(@Body() data: AddProductDto) {
    return await this.cartService.update(data);
  }

  @HttpCode(204)
  @Delete("/remove")
  async remove(@Body() data: DeleteProductDto) {
    return await this.cartService.remove(data);
  }
}
