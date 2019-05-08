import profileReduser from "./profileReducer";
import dialogReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";

let _store ={
    _state: {
        profilePage:{
            posts:[
                {id: 1, message: 'My post', likesCount: 12},
                {id: 2, message: 'Sunny day', likesCount: 12},
                {id: 3, message: 'Hello', likesCount: 1}
            ],
            newPostText:"write your text"
        },
        dialogsPage:{
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hello'}
            ] ,
            dialogs:[
                {id: 1, name: 'User'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'}
            ],
            newMessageText: 'write your message'
        },
        sidebar:{},

    },
    getState (){
        return this._state;
    },
    _callSubscriber(){
        console.log('state changed');
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



export default _store;