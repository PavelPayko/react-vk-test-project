import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./reducers/loginReducer";
import {pageReducer} from "./reducers/pageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    login: loginReducer,
    page: pageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))