import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { CategoryModule } from './category/category.module';
import { MedicineModule } from './medicine/medicine.module';
import { MedicineTypeModule} from './medicine-type/medicine-type.module'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PharmacyModule,
    CategoryModule,
    MedicineModule,
    MedicineTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
