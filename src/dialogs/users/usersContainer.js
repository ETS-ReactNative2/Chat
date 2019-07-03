import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {
    getUsersThunkCreator,
    setCurrentPageActionCreator,
    subscribeActionCreator, subscribeInProgressActionCreator,
    unsubscribeActionCreator
} from "../../redux/usersReducer";
import Preloader from "../../common/preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (page)=>{
        this.props.getUsers(page, this.props.pageSize);
    }
    render() {
        return (
            <div>
                {this.props.isFetching ?
                    <Preloader/>
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize ={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unsubscribe = {this.props.unsubscribe}
                   subscribe = {this.props.subscribe}
                   toggleSubscribeInProgress = {this.props.toggleSubscribeInProgress}
                   subscribeInProgress = {this.props.subscribeInProgress}
            />
            </div>
        )

    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        subscribeInProgress: state.usersPage.subscribeInProgress
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        toggleSubscribeInProgress:(isFetching) => {
            dispatch(subscribeInProgressActionCreator (isFetching))
        },
        getUsers: (currentPage, pageSize) =>{
            dispatch (getUsersThunkCreator(currentPage, pageSize))
        }
    }
}
export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(UsersContainer);
