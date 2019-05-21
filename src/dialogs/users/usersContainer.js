import React from 'react';
import {connect} from "react-redux";
import Users from "./users";
import {
    setCurrentPageActionCreator, setToggleFetchingActionCreator, setTotalUserCountActionCreator,
    setUsersActionCreator,
    subscribeActionCreator,
    unsubscribeActionCreator
} from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../../common/preloader/preloader";



class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //         });
    //     }
    // }
    componentDidMount () {
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
        });
    }
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching (false);
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
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
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);
