import { IsString, IsOptional, IsPhoneNumber,IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePharmacyDto {
  @ApiProperty({ example: 'Farmácia Central' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Av. Eduardo Mondlane, Maputo' })
  @IsNotEmpty({ message: 'O endereço é obrigatório.' })
  @IsString()
  address: string;

  @ApiProperty({ example: '+258841234567', required: false })
  @IsString({ message: 'O telefone deve ser uma string.' })
  @IsOptional()
  @IsPhoneNumber('MZ')
  phone?: string;
}


