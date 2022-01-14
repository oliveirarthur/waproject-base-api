import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 255 })
  public description: string;

  @IsNotEmpty()
  @ApiProperty({ required: false, type: 'integer', minimum: 0 })
  public quantity: number;

  @IsNotEmpty()
  @ApiProperty({ required: true, type: 'integer', minimum: 0 })
  public value: number;
}
