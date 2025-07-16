import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterWithPharmacyDto } from './dto/register-with-pharmacy.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: CreateUserDto) {
    // verificar se a farmácia existe
    const pharmacy = await this.prisma.pharmacy.findUnique({
      where: { id: dto.pharmacyId },
    });
  
    if (!pharmacy) {
      throw new NotFoundException('Farmácia não encontrada');
    }
  
    // criar o usuário com hash de senha
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
        pharmacyId: dto.pharmacyId,
      },
    });
  
    return { message: 'Usuário criado com sucesso', userId: user.id };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, email: user.email, pharmacyId: user.pharmacyId, };
    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
  
  async registerWithPharmacy(dto: RegisterWithPharmacyDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
  
    const pharmacy = await this.prisma.pharmacy.create({
      data: {
        name: dto.pharmacyName,
        address: dto.pharmacyAddress,
        phone: dto.pharmacyPhone,
      },
    });
  
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
        pharmacyId: pharmacy.id,
      },
    });
  
    return {
      message: 'Usuário e farmácia criados com sucesso',
      userId: user.id,
      pharmacyId: pharmacy.id,
    };
  }
}

