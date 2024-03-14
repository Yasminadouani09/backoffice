import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  imageURL: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
}
