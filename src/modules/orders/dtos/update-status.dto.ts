import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsNotEmpty } from "class-validator";

export default class UpdateStatusDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  @ApiProperty()
  status: "DELIVERED" | "PENDING" | "CONFIRMED";
}
