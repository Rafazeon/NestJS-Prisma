import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email do usuário',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nome completo do usuário',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Define se o usuário é admin',
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  admin: boolean;
}
