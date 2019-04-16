import {combineReducers, createStore} from "redux";
import dialogReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";
import profileReduser from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    sidebar: sidebarReduser
});

let store = createStore(reducers);


export default store;