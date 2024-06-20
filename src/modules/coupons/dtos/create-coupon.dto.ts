import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  Min,
  Max,
} from "class-validator";

export default class CreateCouponDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @ApiProperty()
  expiresAt: Date;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Transform(({ value }) => parseFloat(value))
  @Min(0)
  @Max(100)
  @ApiProperty()
  discount: number;
}
