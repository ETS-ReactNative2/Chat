import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";
import profileReduser from "./profileReducer";
import usersReduser from "./usersReducer";
import postsReduser from "./postsReducer";
import authReduser from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    postsPage: postsReduser,
    auth: authReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
