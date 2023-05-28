import { GET_ALL_OWNERS, GET_SELECTED_OWNER, FETCH_ERROR } from "../constants";
import axios from "../utils/Api";

export const getFeeds = () => {
  return (dispatch) => {
    return axios
      .get("owners")
      .then(({ data }) => {
        dispatch({ type: GET_ALL_OWNERS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};

export const getSelectedFeed = (ownerId) => {
  return (dispatch) => {
    return axios
      .get(`owners/${ownerId}`)
      .then(({ data }) => {
        dispatch({ type: GET_SELECTED_OWNER, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
  };
};
