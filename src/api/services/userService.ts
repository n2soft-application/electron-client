import { Get, Post } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface IUser {
  id: string;
  username: string;
  employeeNumber: string;
  loginIp: string;
}

export const UserService = {
  login: async (data: object): Promise<ApiResponse<any>> => {
    return Post("/api/auth/login", data);
  },
  getUser: async (): Promise<ApiResponse<IUser[]>> => {
    return Get(`/api/user`);
  },
};
