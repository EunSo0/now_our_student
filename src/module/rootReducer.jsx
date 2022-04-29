import { combineReducers } from "redux";
import stuReducer from "./stuReducer";
import nationReducer from "./nationReducer";
import editorialReducer from "./editorialReducer";

const rootReducer = combineReducers({
  stuReducer,
  nationReducer,
  editorialReducer,
});

export default rootReducer;
