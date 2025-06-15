import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Pharmacy } from '@prisma/client';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/UpdatePharmacyDto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PharmacyService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Pharmacy[]> {
    return this.prisma.pharmacy.findMany();
  }

  async create(data: CreatePharmacyDto): Promise<Pharmacy> {
    return this.prisma.pharmacy.create({ data });
  }

  async findOne(id: number): Promise<Pharmacy> {
    const pharmacy = await this.prisma.pharmacy.findUnique({ where: { id } });
  
    if (!pharmacy) {
      throw new NotFoundException(`Pharmacy with ID ${id} not found`);
    }
  
    return pharmacy;
  }
  
  async update(id: number, data: UpdatePharmacyDto): Promise<Pharmacy> {
    return this.prisma.pharmacy.update({ where: { id }, data });
  }
  
  async remove(id: number): Promise<Pharmacy> {
    return this.prisma.pharmacy.delete({ where: { id } });
  }
  
}



