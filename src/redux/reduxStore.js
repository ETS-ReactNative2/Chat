import {combineReducers, createStore} from "redux";
import dialogReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";
import profileReduser from "./profileReducer";
import usersReduser from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
});

let store = createStore(reducers);


export default store;