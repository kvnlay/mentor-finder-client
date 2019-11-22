import { GET_BIOS } from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, { type, data }) => {
  switch (type) {
    case GET_BIOS:
      console.log(data);
      return [...state, ...data];

    default:
      return state;
  }
};
