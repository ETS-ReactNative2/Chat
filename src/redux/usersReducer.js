const subscribe = "subscribe";
const unsubscribe = "unsubscribe";
const setUsers = "setUsers";


let initialState = {
    users:[],

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
            return {...state, users: [...state.users, ...action.users]}
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
export default usersReduser;