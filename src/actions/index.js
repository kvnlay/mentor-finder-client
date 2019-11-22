import { GET_BIOS} from "../actions/actionTypes";
import Axios from "axios";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://torre.bio/api/people?";

const getData = query => {
  return (dispatch, getState) => {
    Axios.get(`${baseUrl}q=${query}&limit=10`)
      .then(response => response.data)
      .then(data => {
        dispatch({
          type: GET_BIOS,
          data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export { getData };
