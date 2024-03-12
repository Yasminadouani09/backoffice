import { ApiProperty } from "@nestjs/swagger"
import { IsEmail } from "class-validator"

export class CreateUserDto {

@ApiProperty()
    firstName :string ;
    @ApiProperty()
    lastName :string ;
    @IsEmail()
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
