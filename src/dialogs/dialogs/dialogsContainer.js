import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
}
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText:()=>{
            dispatch(sendMessageCreator());
        },
        onSendMessageClick: (text)=>{
            dispatch(updateNewMessageTextCreator(text));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
