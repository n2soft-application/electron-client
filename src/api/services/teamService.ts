import { Get } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface ITeam {
  code: string;
  name: string;
  telephoneNumber: string;
  brCode: string;
  faxNumber: string;
  webFaxNumber: string;
}

export const TeamService = {
  getTeam: async (): Promise<ApiResponse<ITeam[]>> => {
    return Get(`/api/common/team`);
  },
};
