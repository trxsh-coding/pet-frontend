import thunk from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "../store/modules/auth"
import user from "../store/modules/user"
import pet from "./modules/old/pet"

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
    auth:auth,
    user:user,
    pet:pet
});

export const store = createStore(rootReducer, composeWithDevTools(middleware));
