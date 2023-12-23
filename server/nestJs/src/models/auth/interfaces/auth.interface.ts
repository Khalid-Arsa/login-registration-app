import { IResponse } from "../../../common/interfaces/response.interface";
import { IUser } from "../../user/interface/user.interface";

export interface ILoginResponse extends IResponse {
  data: IUser;
  token: string;
}

export interface IRegisterResponse extends IResponse{
  savedUser: IUser;
}