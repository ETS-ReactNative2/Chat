const addPost = "addPost";
const updateNewPostText = "updateNewPostText";

let initialState = {
    posts:[
        {id: 1, message: 'My post', likesCount: 12},
        {id: 2, message: 'Sunny day', likesCount: 12},
        {id: 3, message: 'Hello', likesCount: 1}
    ],
    newPostText:"write your text",
}

const profileReduser = (state = initialState, action)=>{
    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case updateNewPostText: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
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
export default profileReduser;