import {
  IsDefined,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ValidateCredential } from '../validators/validate-credential.validator';
import { Trim } from '../../../common/decorators/trim.decorator';

export class LoginDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(30)
  @ValidateCredential()
  readonly password!: string;

  @Trim()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @Matches(/^[\w.-]+$/i)
  @ValidateCredential()
  readonly email!: string;
}