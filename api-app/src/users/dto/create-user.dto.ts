import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  name: string;
  @ApiProperty()
  about: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  imageUrl: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
}
