import { Injectable } from '@nestjs/common';
import {
  isString,
  matches,
  maxLength,
  minLength,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AuthService } from '../service/auth.service';

@Injectable()
@ValidatorConstraint({ name: 'credential', async: true })
export class ValidateCredentialConstraint implements ValidatorConstraintInterface {
  constructor(private readonly authenticationService: AuthService) {}

  validate(_: unknown, { object, property }: ValidationArguments) {
    if (!this.hasCredentials(object)) return true;

    return this.authenticationService.verifyCredentials(object, property);
  }

  defaultMessage(): string {
    return '$property is incorrect';
  }

  private hasCredentials(object: object): object is {
    email: string;
    password: string;
    [key: string]: unknown;
  } {
    const { password, email } = object as Record<string, unknown>;
    const isValidPassword =
      isString(password) && minLength(password, 8) && maxLength(password, 30);
    const isValidUsername =
      isString(email) &&
      maxLength(email, 30) &&
      matches(email, /^[\w.-]+$/i);

    if (isValidPassword && isValidUsername) return true;

    return false;
  }
}

export function ValidateCredential(options: ValidationOptions = {}) {
  return function (object: object, propertyName: 'email' | 'password') {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      validator: ValidateCredentialConstraint,
    });
  };
}