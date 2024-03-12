import { ApiProperty } from "@nestjs/swagger"
import { IsEmail } from "class-validator"

export class CreateUserDto {
@IsEmail()
@ApiProperty()
    firstName :string ;
    @ApiProperty()
    lastName :string ;
    @ApiProperty()
    email :string ;
    @ApiProperty()
    password :string;
    @ApiProperty()
    phone :string;
    @ApiProperty()
    address :string;
    @ApiProperty()
    occupation :string;
}
