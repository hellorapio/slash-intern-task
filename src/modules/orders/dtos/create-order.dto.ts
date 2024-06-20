import { IsNumber, IsPositive } from "class-validator";

export default class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  userId: number;
}
