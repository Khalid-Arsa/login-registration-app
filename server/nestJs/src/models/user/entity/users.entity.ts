import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { IUser } from '../interface/user.interface'
import * as bcrypt from 'bcrypt';

const bcryptRegex = /^\$(?:2a|2x|2y|2b)\$\d+\$/;

@Entity('user')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: "varchar", nullable: false })
  @IsNotEmpty({ message: 'Please provide a valid name' })
  @IsString({ message: "Name must be a string" })
  first_name!: string;

  @Column({ type: "varchar", nullable: false })
  @IsNotEmpty({ message: 'Please provide a valid username' })
  @IsString({ message: "Username must be a string" })
  last_name!: string;

  @Column({ type: "varchar", nullable: false })
  @IsNotEmpty({ message: 'Please provide a address' })
  @IsString({ message: "Address must be a string" })
  address!: string;

  @Column({ type: "varchar", nullable: false })
  @IsNotEmpty({ message: 'Please provide a phone number' })
  @IsString({ message: "Phone number must be a string" })
  phone_number!: string;

  @Column({ type: "varchar", nullable: false, unique: true })
  @IsNotEmpty({ message: 'Please provide a valid email' })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsString({ message: "Email must be a string" })
  email!: string;

  @Column({ type: "varchar", nullable: false })
  @Exclude()
  @IsNotEmpty({ message: 'Please provide a valid password' })
  @IsString({ message: "Password must be a string" })
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @BeforeInsert()
  async hashPassword() {
    if (!bcryptRegex.test(this.password)) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  checkPassword(plainPassword: string) {
    return bcrypt.compare(plainPassword, this.password);
  }
};
