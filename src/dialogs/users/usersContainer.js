import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        subscribe: (userId)=>{
            dispatch(subscribeActionCreator(userId))
        },
        unsubscribe: (userId)=>{
            dispatch(unsubscribeActionCreator(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersActionCreator(users))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Users);