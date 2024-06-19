import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsAlpha,
  IsOptional,
} from "class-validator";

export default class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  gender: string;
}
