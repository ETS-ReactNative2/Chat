import {usersAPI} from "../api/api";

const addPost = "addPost";
const updateNewPostText = "updateNewPostText";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts:[
        {id: 1, message: 'My post', likesCount: 12},
        {id: 2, message: 'Sunny day', likesCount: 12},
        {id: 3, message: 'Hello', likesCount: 1}
    ],
    newPostText:"write your text",
    profile: null,
}

const profileReduser = (state = initialState, action)=>{
    switch (action.type) {

        case addPost:
            let newPost = {
                id: 5,
                message: state. newPostText,
                likeCount:0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        case updateNewPostText: {
            return{
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export let addPostActionCreator =()=>{
    return{
        type: addPost
    }
}
export let updateNewPostTextActionCreator =(text)=>{
    return{
        type: updateNewPostText,
        newText: text
    }
}
export let setUserProfile = (profile) =>{
    return{
        type: SET_USER_PROFILE,
        profile
    }
}

export let getUserProfile = (userId) => (dispatch) =>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default profileReduser;
