import { IsEmail, isEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthDto { }
export class Logindto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
