import { IsString } from 'class-validator';

export class CreateMedicineTypeDto {
  @IsString()
  name: string;
}
