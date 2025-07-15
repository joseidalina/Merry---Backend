import { Controller, Get, Post, Body, Query,Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-Medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Controller('medicines')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Post()
create(
  @Body() createMedicineDto: CreateMedicineDto,
  @CurrentUser() user: any
) {
  return this.medicineService.create(createMedicineDto, user.pharmacyId);
}


  @Get()
  findAll(
    @Query('name') name?: string,
    @Query('categoryId') categoryId?: string,
    @Query('typeId') typeId?: string,
    @Query('pharmacyId') pharmacyId?: string,
    @Query('inStock') inStock?: string,
  ) {
    return this.medicineService.findAll({
      name,
      categoryId: categoryId ? Number(categoryId) : undefined,
      typeId: typeId ? Number(typeId) : undefined,
      pharmacyId: pharmacyId ? Number(pharmacyId) : undefined,
      inStock: inStock !== undefined ? inStock === 'true' : undefined,
  });
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicineService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicineDto: UpdateMedicineDto) {
    return this.medicineService.update(+id, updateMedicineDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicineService.remove(+id);
  }
}

