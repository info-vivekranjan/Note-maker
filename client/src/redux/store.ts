import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { registerReducer } from "./register/registerReducer";
import { notesReducer } from "./notes/notesReducer";
import { textEditorReducer } from './textEditor/textEditorReducer'
import { markdownEditorReducer } from './markdownEditor/markdownEditorReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  authRegister: registerReducer,
  notesData: notesReducer,
  textEditorData: textEditorReducer,
  markdownEditorData: markdownEditorReducer
});

/**
 *
 * @param {redux state} state
 */

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
