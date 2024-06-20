import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import CreateProductDto from "./dtos/create-product.dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post("/")
  async create(@Body() createUserDto: CreateProductDto) {
    
    return await this.productService.create(createUserDto);
  }

  @Get("/")
  async findAll() {
    return await this.productService.findAll();
  }

  @Get("/:id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.productService.findOne(id);
  }
}
