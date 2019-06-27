import React from 'react';
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";

const  Dialogs = (props)=> {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageText = state.newMessageText;
    let onSendMessageClick = ()=>{
        props.onSendMessageClick();
    }
    let onNewMessageChange = (event)=>{
           let text = event.target.value;
           props.updateNewMessageText(text)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>;
    return(
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}

            </div>
            <div className="messages">
                <div> {messagesElements}</div>
                <div>
                    <textarea
                        placeholder = "write your message"
                        value = {newMessageText}
                        onChange={onNewMessageChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
