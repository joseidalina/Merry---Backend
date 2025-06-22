import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';

@Injectable()
export class MedicineTypeService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMedicineTypeDto) {
    return this.prisma.medicineType.create({ data });
  }

  findAll() {
    return this.prisma.medicineType.findMany();
  }

  findOne(id: number) {
    return this.prisma.medicineType.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateMedicineTypeDto) {
    return this.prisma.medicineType.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.medicineType.delete({ where: { id } });
  }
}
