import { useReducer } from "react";
import {
  UPDATE_LOGIN,
  UPDATE_USER
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return {
        ...state,
        currentForm: action.currentForm,
        formType: action.formType,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    case 'close':
      return {
        ...state,
        open: false
      }
    case 'open':
      return {
        ...state,
        open: true
      }
    default:
      return state;
  }
};

export function usePlantReducer(initialState) {
  return useReducer(reducer, initialState);
}
