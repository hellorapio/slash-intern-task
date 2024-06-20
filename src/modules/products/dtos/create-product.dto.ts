import { ApiProperty } from "@nestjs/swagger";
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
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  stock: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  brand?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.toUpperCase())
  productCondition?: string;
}
