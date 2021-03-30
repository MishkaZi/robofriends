import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

import Axios from 'axios';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  try {
    const result = await Axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error });
  }
};
