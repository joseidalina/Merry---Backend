import { Module } from '@nestjs/common';
import { MedicineTypeService } from './medicine-type.service';
import { MedicineTypeController } from './medicine-type.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [MedicineTypeController],
  providers: [MedicineTypeService, PrismaService],
})
export class MedicineTypeModule {}
