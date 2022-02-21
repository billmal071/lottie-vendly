import { StateType } from "@/interfaces/action.type";
import { Result } from "@/interfaces/resultType";
import { createContext, useReducer } from "react";
import contextReducer from "./context.reducer";
import { contextType } from "./context.type";
import React from "react";

export const TwitterContext = createContext({
  data: [
    {
      id: "",
      name: "",
      username: "",
    },
  ],
  loading: false,
  error: null,
  getData: (data: Result) => {},
  getError: (error: any) => {},
  getLoading: (loading: boolean) => {},
});

export type ContextActionProps = {
  children: React.ReactNode;
};

export default function ContextAction({
  children,
}: ContextActionProps): JSX.Element {
  const initialState: StateType = {
    data: [
      {
        id: "",
        name: "",
        username: "",
      },
    ],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(contextReducer, initialState);

  function getData(data: Result) {
    dispatch({ type: contextType.SUCCESS, payload: data });
  }

  function getLoading(loading: boolean) {
    dispatch({ type: contextType.LOADING, payload: { loading } });
  }

  function getError(error: any) {
    dispatch({ type: contextType.ERROR, payload: { error } });
  }

  return (
    <TwitterContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        error: state.error,
        getData,
        getLoading,
        getError,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
}
