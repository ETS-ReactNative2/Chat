const subscribe = "subscribe";
const unsubscribe = "unsubscribe";
const setUsers = "setUsers";
const setCurrentPage = "setCurrentPage";
const setTotalUserCount = "setTotalUserCount";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
export let setTotalUserCountActionCreator = (totalUsersCount) =>{
    return{
        type: setTotalUserCount,
        count: totalUsersCount
    }
}
export let setToggleFetchingActionCreator = (isFetching) =>{
    return{
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default usersReduser;
