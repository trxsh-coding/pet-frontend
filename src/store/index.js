import thunk from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../store/modules/auth"
import user from "../store/modules/user"
import pet from "./modules/pet"
import post from "./modules/post";
import chat from "./modules/chat";

const middleware = applyMiddleware(thunk);

export const rootReducer = combineReducers({
    auth,
    user,
    pet,
    post,
    chat
});

export const store = createStore(rootReducer, composeWithDevTools(middleware));
