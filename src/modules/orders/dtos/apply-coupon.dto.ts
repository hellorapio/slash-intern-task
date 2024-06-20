import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from "class-validator";

export default class ApplyCouponDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  code: string;
}
