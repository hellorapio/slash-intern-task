import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from "class-validator";

export default class ApplyCouponDto {
  @IsNumber()
  @IsPositive()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  code: string;
}
