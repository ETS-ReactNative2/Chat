const updateNewMessageText = "updateNewMessageText";
const sendMessage = "sendMessage";
let initialState = {
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
}
const dialogReduser = (state = initialState, action)=>{

    let stateCopy;
    switch (action.type) {
        case updateNewMessageText:
            return {
                ...state,
                newMessageText: action.newMess
            };

        case sendMessage:
            let message = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages,{id: 6, message: message} ],
                newMessageText: '',
            };

        default:
            return state;
    }
}
export let sendMessageCreator =()=>{
    return{
        type: sendMessage
    }
}
export let updateNewMessageTextCreator =(text)=>{
    return{
        type: updateNewMessageText,
        newMess: text
    }
}

export default dialogReduser;