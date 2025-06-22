import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-Medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from '@prisma/client';

@Controller('medicines')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Post()
async create(@Body() data: CreateMedicineDto): Promise<Medicine> {
  return this.medicineService.create(data);
}

  @Get()
  findAll() {
    return this.medicineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicineService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateMedicineDto) {
    return this.medicineService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicineService.remove(+id);
  }
}
