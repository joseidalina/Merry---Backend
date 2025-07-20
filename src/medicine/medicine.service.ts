import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-Medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from '@prisma/client';


@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMedicineDto, pharmacyId: number): Promise<Medicine> {
    return this.prisma.medicine.create({
      data: {
        ...data,
        pharmacyId,
      },
    });
  }
  

  async findAll(query: {
    name?: string;
    categoryId?: number;
    typeId?: number;
    pharmacyId?: number;
    inStock?: boolean;
  }) {
    const { name, categoryId, typeId, pharmacyId, inStock } = query;
  
    return this.prisma.medicine.findMany({
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
        categoryId,
        typeId,
        pharmacyId,
        inStock,
      },
      include: {
        category: true,
        pharmacy: true,
        type: true,
      },
    });
  }
  

  findOne(id: number) {
    return this.prisma.medicine.findUnique({
      where: { id },
      include: { category: true, pharmacy: true, type: true },
    });
  }

  update(id: number, data: UpdateMedicineDto) {
    return this.prisma.medicine.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.medicine.delete({
      where: { id },
    });
  }
}

