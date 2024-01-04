export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  email: string;
  password: string;
  confirm_password?: string;
  createdAt: Date;
  updatedAt: Date;
}