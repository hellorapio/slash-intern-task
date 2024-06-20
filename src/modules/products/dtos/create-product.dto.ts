import { Transform } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
} from "class-validator";

export default class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  stock: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.toUpperCase())
  productCondition: string;
}
