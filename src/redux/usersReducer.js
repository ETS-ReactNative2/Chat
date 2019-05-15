const subscribe = "subscribe";
const unsubscribe = "unsubscribe";
const setUsers = "setUsers";
const setCurrentPage = "setCurrentPage";
const setTotalUserCount = "setTotalUserCount";


let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
export default usersReduser;
