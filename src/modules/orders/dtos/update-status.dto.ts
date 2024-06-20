import { Transform } from "class-transformer";
import { IsOptional, IsString, IsNotEmpty } from "class-validator";

export default class UpdateStatusDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.toUpperCase())
  status: "DELIVERED" | "PENDING" | "CONFIRMED";
}
