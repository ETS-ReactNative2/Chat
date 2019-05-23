import {combineReducers, createStore} from "redux";
import dialogReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";
import profileReduser from "./profileReducer";
import usersReduser from "./usersReducer";
import postsReduser from "./postsReducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    postsPage: postsReduser
});

let store = createStore(reducers);

window.store = store;

export default store;
