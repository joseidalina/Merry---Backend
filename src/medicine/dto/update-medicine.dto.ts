import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicineDto } from './create-Medicine.dto';

export class UpdateMedicineDto extends PartialType(CreateMedicineDto) {}

