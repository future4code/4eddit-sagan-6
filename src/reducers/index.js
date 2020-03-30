import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postList from './postList'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    postList
  });
