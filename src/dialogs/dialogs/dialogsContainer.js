import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

