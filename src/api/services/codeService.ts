import { Get, Post } from "..";
import { ApiResponse } from "../models/common/apiError";

export const CodeType = {};

export interface ICode {
  kind: string;
  name: string;
  items: ICodeItem[];
}

export interface ICodeItem {
  code: string;
  name: string;
}

export interface ICodeInputValues {
  name: string;
  kind: string;
  useYn: boolean;
  mainYn: boolean;
}

export const CodeService = {
  getCode: async (): Promise<ApiResponse<ICode[]>> => {
    return Get(`/api/common/code`);
  },
  getCodeByKind: async (kind: string): Promise<ApiResponse<ICode[]>> => {
    return Get(`/api/common/code/${kind}`);
  },
  getCodeByValues: async (
    data: ICodeInputValues
  ): Promise<ApiResponse<ICode[]>> => {
    return Post(`/api/common/code/input-values`, data);
  },
};
