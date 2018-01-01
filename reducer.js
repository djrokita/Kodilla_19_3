import { combineReducers } from "redux";
import comments from "./comments";
import users from "./users"; //not defined yet

const app = combineReducers({
  comments,
  users
});
