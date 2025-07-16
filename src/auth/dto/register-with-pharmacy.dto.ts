import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterWithPharmacyDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string; 

  @IsNotEmpty()
  @IsString()
  pharmacyName: string;

  @IsNotEmpty()
  @IsString()
  pharmacyAddress: string;

  @IsString()
  pharmacyPhone?: string;
}
