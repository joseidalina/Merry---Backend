import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  form: string;

  @IsBoolean()
  @IsOptional()
  inStock?: boolean;

  @IsInt()
  pharmacyId: number;

  @IsInt()
  categoryId: number;

  @IsInt()
  typeId: number;

  @IsString()
  @IsOptional()
  description?: string;
}
