import { contextType } from "@/context/context.type";
import { Result, TwitterResult } from "./resultType";

export type ActionSuccess = {
  type: contextType.SUCCESS;
  payload: {
    data: TwitterResult[];
  };
};

export type ActionLoading = {
  type: contextType.LOADING;
  payload: {
    loading: boolean;
  };
};

export type ActionError = {
  type: contextType.ERROR;
  payload: {
    error: string;
  };
};

export type StateType = {
  data: TwitterResult[];
  loading: boolean;
  error: string | null | any;
};
