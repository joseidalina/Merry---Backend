import { IsString, IsOptional, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePharmacyDto {
  @ApiProperty({ example: 'Farmácia Central' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Av. Eduardo Mondlane, Maputo' })
  @IsString()
  address: string;

  @ApiProperty({ example: '+258841234567', required: false })
  @IsOptional()
  @IsPhoneNumber('MZ')
  phone?: string;
}


