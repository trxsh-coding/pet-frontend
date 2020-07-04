import thunk from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../store/modules/auth"
import user from "../store/modules/user"
import pet from "./modules/pet"
import post from "./modules/post";

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
    auth:auth,
    user:user,
    pet:pet,
    post:post
});

export const store = createStore(rootReducer, composeWithDevTools(middleware));
