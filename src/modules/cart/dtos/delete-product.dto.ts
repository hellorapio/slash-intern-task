import { IsNumber, IsPositive } from "class-validator";

export default class DeleteProductDto {
  @IsNumber()
  @IsPositive()
  userId: number;

  @IsNumber()
  @IsPositive()
  productId: number;
}
