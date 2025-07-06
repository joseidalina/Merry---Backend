import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMedicineDto } from './dto/create-Medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMedicineDto) {
    return this.prisma.medicine.create({
      data,
      include: { category: true, pharmacy: true, type: true },
    });
  }

  findAll() {
    return this.prisma.medicine.findMany({
      include: { category: true, pharmacy: true, type: true },
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

