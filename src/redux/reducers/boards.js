import {
  LOADING_BOARDS,
  LOAD_BOARDS_FAIL,
  LOAD_BOARDS_SUCCESS,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAIL,
  ADD_BOARD_NORMALISE,
} from '../actions/types';

const initialState = {
  allBoards: [],
  loadingBoards: true,
  error: null,
  addSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BOARDS:
      return { ...state, loadingBoards: action.payload };
    case LOAD_BOARDS_FAIL:
    case ADD_BOARD_FAIL:
      return { ...state, error: action.payload };
    case LOAD_BOARDS_SUCCESS:
      return {
        ...state,
        allBoards: action.payload,
        error: null,
        loadingBoards: false,
      };
    case ADD_BOARD_SUCCESS:
      return {
        ...state,
        addSuccess: true,
      };
    case ADD_BOARD_NORMALISE:
      return { ...state, addSuccess: false };
    default:
      return state;
  }
};
