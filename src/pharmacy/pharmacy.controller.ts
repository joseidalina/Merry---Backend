import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/UpdatePharmacyDto';
import { Pharmacy } from '@prisma/client';

@Controller('pharmacies')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyService.findAll();
  }

  @Post()
  async create(@Body() data: CreatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyService.create(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyService.findOne(+id);
    if (!pharmacy) {
      throw new NotFoundException(`Farmácia com ID ${id} não foi encontrada`);
    }
    return pharmacy;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePharmacyDto,
  ): Promise<Pharmacy> {
    return this.pharmacyService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Pharmacy> {
    return this.pharmacyService.remove(+id);
  }
}




