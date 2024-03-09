import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgramsService {
  constructor(private readonly prisma: PrismaService) {
  }
    async create(dto: CreateProgramDto) {
    //  return await this.prisma.program.create({
    //    data: dto,
    //  });
    }

    findAll() {
      return this.prisma.program.findMany();;
    }

    findOne(id: number) {
      return this.prisma.program.findUniqueOrThrow({ where: { id } });
    }

    update(id: number, updateProgramDto: UpdateProgramDto) {
      return `This action updates a #${id} program`;
    }

    remove(id: number) {
      return `This action removes a #${id} program`;
    }
  }
