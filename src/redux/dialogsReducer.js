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
    switch (action.type) {
        case updateNewMessageText:
            state.newMessageText = action.newMess;
            return state;
        case sendMessage:
            let message = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: message});
            return state;
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