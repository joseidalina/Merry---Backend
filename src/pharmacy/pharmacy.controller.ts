import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/UpdatePharmacyDto';
import { Pharmacy } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('pharmacies')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyService.findOne(+id);
    if (!pharmacy) {
      throw new Error(`Farmácia com ID ${id} não encontrada`);
    }
    return pharmacy;
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: CreatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyService.create(data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePharmacyDto
  ): Promise<Pharmacy> {
    return this.pharmacyService.update(+id, data);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Pharmacy> {
    return this.pharmacyService.remove(+id);
  }
}





