
import {
  LOAD_BOOK_REPOS,
  LOAD_BOOK_REPOS_SUCCESS,
  LOAD_BOOK_REPOS_ERROR,
} from '../App/constants';

// The initial state of the App
const INITIAL_STATE = {
  isloading: false,
  isloaded: true,
  errors: [],
  termSearch: '',
  bookData: [],
}
export default function (state = INITIAL_STATE, { type, payload } = {}){
  const actionFactory = {
    [LOAD_BOOK_REPOS]:{
      ...state,
      isloading: true,
      error: false,
      isloaded: false,
      termSearch: payload
    },
    [LOAD_BOOK_REPOS_SUCCESS]: {
      ...state,
      isloading: false,
      isloaded: true,
      bookData: payload
    },
    [LOAD_BOOK_REPOS_ERROR]: {
      ...state,
      isloading: false,
      isloaded: true,
      errors: payload
    }
  };
  const bookReducer = actionFactory[type] || state;
  return bookReducer
}
