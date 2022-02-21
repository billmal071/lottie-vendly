import {
  ActionError,
  ActionLoading,
  ActionSuccess,
  StateType,
} from "@/interfaces/action.type";
import { contextType } from "./context.type";

const initialState: StateType = {
  data: [{
    id: "",
    name: "",
    username: "",
  }],
  loading: false,
  error: null,
};

export default function contextReducer(
  state: StateType = initialState,
  action: ActionSuccess | ActionLoading | ActionError
) {
  switch (action.type) {
    case contextType.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case contextType.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case contextType.ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
