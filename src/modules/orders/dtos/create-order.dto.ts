import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export default class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  userId: number;
}
