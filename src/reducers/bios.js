import { GET_BIOS } from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, { type, data }) => {
  switch (type) {
    case GET_BIOS:
      return [...state, ...data];

    default:
      return state;
  }
};
