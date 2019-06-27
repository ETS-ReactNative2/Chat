import {usersAPI} from "../api/api";

const subscribe = "subscribe";
const unsubscribe = "unsubscribe";
const setUsers = "setUsers";
const setCurrentPage = "setCurrentPage";
const setTotalUserCount = "setTotalUserCount";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_SUBSCRIBE_PROGRESS = "TOGGLE_IS_SUBSCRIBE_PROGRESS";


let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    subscribeInProgress: []
}

const usersReduser = (state = initialState, action)=>{
    switch (action.type) {
        case subscribe:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, subscribe: true}
                    }
                    return user;
                })
            }
        case unsubscribe:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, subscribe: false}
                    }
                    return user;
                })
            }
        case setUsers: {
            return {...state, users: action.users}
        }
        case setCurrentPage: {
            return {...state, currentPage:action.currentPage}
        }
        case setTotalUserCount: {
            return {...state, totalUsersCount:action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching:action.isFetching}
        }
        case TOGGLE_IS_SUBSCRIBE_PROGRESS: {
            return {
                ...state,
                subscribeInProgress: action.isFetching ?
                    [...state.subscribeInProgress, action.userId]
                    :
                    state.subscribeInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

export let subscribeActionCreator =(userId)=>{
    return{
        type: subscribe,
        userId
    }
}
export let unsubscribeActionCreator =(userId)=>{
    return{
        type: unsubscribe,
        userId,
      }
}
export let setUsersActionCreator =(users)=>{
    return{
        type: setUsers,
         users
      }
}

export let setCurrentPageActionCreator = (currentPage) =>{
    return{
        type: setCurrentPage,
        currentPage
    }
}
export let setTotalUserCountActionCreater = (totalUsersCount) =>{
    return{
        type: setTotalUserCount,
        count: totalUsersCount
    }
}
export let toggleIsFetching = (isFetching) =>{
    return{
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export let subscribeInProgressActionCreator = (isFetching, userId) =>{
    return{
        type: TOGGLE_IS_SUBSCRIBE_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage, pageSize)=>{
    return (dispatch) =>{
    dispatch (toggleIsFetching (true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching (false));
        dispatch(setUsersActionCreator(data.items));
        dispatch(setTotalUserCountActionCreater(data.totalCount));
        });
    }
}

export default usersReduser;
