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
    case 'closeDevice':
      return {
        ...state,
        openDevice: false
      };
    case 'openDevice':
      return {
        ...state,
        openDevice: true
      };
    case 'closePlant':
      return {
        ...state,
        openPlant: false
      };
    case 'openPlant':
      return {
        ...state,
        openPlant: true
      };
    case 'updateQuery':
      return { ...state, query: action.query }
    case 'saveUUID':
      return { ...state, uuid: action.uuid }
    default:
      return state;
  }
};

export function usePlantReducer(initialState) {
  return useReducer(reducer, initialState);
}
