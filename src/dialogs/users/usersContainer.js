import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {
    setCurrentPageActionCreator, setTotalUserCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator
} from "../../redux/usersReducer";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {
        subscribe: (userId) => {
            dispatch(subscribeActionCreator(userId))
        },
        unsubscribe: (userId) => {
            dispatch(unsubscribeActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountActionCreator(totalCount))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Users);
