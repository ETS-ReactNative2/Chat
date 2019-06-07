import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {
    setCurrentPageActionCreator, setToggleFetchingActionCreator, setTotalUserCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator, subscribeInProgressActionCreator,
    unsubscribeActionCreator
} from "../../redux/usersReducer";
import Preloader from "../../common/preloader/preloader";
import {usersAPI} from "../../api/api";



class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.toggleIsFetching (true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
        });
    }
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching (true);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(data.items);
        });
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
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountActionCreator(totalCount))
        },
        toggleIsFetching:(isFetching) => {
            dispatch(setToggleFetchingActionCreator(isFetching))
        },
        toggleSubscribeInProgress:(isFetching) => {
            dispatch(subscribeInProgressActionCreator (isFetching))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);
