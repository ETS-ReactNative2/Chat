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
        updateNewMessageText:(text)=>{
            dispatch(updateNewMessageTextCreator(text));
        },
        onSendMessageClick: ()=>{
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

