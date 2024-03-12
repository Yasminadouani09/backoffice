import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto, Logindto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: Logindto) {
    const user = await this.prisma.user.findUnique({where:{
        email: dto.email,
      },
    });
    if (!user) {
      throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
    }
    const { password, ...rest } = user;
    if (await bcrypt.compare(dto.password, password)) {
      const auth = this.jwtService.sign(rest)
      return auth;
    } else {
      throw new HttpException('invalid password', HttpStatus.BAD_REQUEST);
    }
  }

  // async getMyInfo(token:string){
  //   const myInfo=this.jwtService.decode(token);
  //   return myInfo
  // }

    }
 
// }









  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }