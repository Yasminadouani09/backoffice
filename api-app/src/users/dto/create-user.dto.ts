import { ApiProperty } from "@nestjs/swagger"
import { IsEmail , IsNumber} from "class-validator"

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
    @IsNumber()
    phone :string;
    @ApiProperty()
    address :string;
    @ApiProperty()
    role : string;
}
