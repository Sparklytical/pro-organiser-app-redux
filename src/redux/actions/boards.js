import {
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARDS_FAIL,
  LOADING_BOARDS,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAIL,
} from './types';
import { getBoards, addBoard } from '../../utils/data';

const loadingAllBoards = (val) => ({
  type: LOADING_BOARDS,
  payload: val,
});

const loadBoardsSuccess = (boards) => ({
  type: LOAD_BOARDS_SUCCESS,
  payload: boards,
});

const handleBoardsError = (error, type) => ({
  type,
  payload: error,
});

const addBoardSuccess = () => ({
  type: ADD_BOARD_SUCCESS,
  payload: null,
});

export const loadBoards = (email) => {
  return (dispatch) => {
    dispatch(loadingAllBoards(true));
    getBoards(email)
      .then((boards) => {
        dispatch(loadBoardsSuccess(boards));
      })
      .catch((err) => {
        dispatch(handleBoardsError(err, LOAD_BOARDS_FAIL));
      });
  };
};

export const handleAddBoard = (board) => {
  return (dispatch) => {
    addBoard(board)
      .then((created) => {
        dispatch(addBoardSuccess());
      })
      .catch((err) => {
        dispatch(handleBoardsError(err, ADD_BOARD_FAIL));
      });
  };
};
