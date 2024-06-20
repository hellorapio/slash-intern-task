import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export default class DeleteProductDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  userId: number;
  
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  productId: number;
}
