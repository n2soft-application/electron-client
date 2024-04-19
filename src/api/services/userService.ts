import { Post } from "..";
import { ApiResponse } from "../models/common/apiError";

export const UserService = {
  login: async (data: object): Promise<ApiResponse<any>> => {
    return Post("/api/auth/login", data);
  },
};
