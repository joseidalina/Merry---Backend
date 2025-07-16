import { IsEmail, IsNotEmpty, MinLength, IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsInt()
  pharmacyId: number; 

  @IsNotEmpty()
  @IsString()
  name: string;
}
