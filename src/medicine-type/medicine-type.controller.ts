import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MedicineTypeService } from './medicine-type.service';
import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';

@Controller('medicine-types')
export class MedicineTypeController {
  constructor(private readonly service: MedicineTypeService) {}

  @Post()
  create(@Body() dto: CreateMedicineTypeDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedicineTypeDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
