const fullPost = "fullPost";
const showPosts = "showPosts"

let initialState = {
   fullText: false,
   posts:[
    {id: 1, img: '../img/1.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'},
    {id: 2, img: '../img/2.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'},
    {id: 3, img: '../img/3.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'},
    {id: 4, img: '../img/4.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'},
    {id: 5, img: '../img/5.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'},
    {id: 6, img: '../img/6.jpg', blogTitle:'We are Champions At Last Month', data: new Date().getFullYear() + "/" + (parseInt(new Date().getMonth()) + 1) + "/" + new Date().getDate(), blogText:'Lorem ipsum'}
    ],
    postsToShow: 3,
    expanded: false
}

const postsReduser = (state = initialState, action)=>{
    switch (action.type) {
        case fullPost:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.postId){
                        return {fullText: true}
                    }
                    return post;
                })

            };
        case showPosts:
            return {
                //console.log("f");
                // ...state,
                // postsToShow: state.postsToShow,
                //     if (postsToShow === 3){
                //         return {postsToShow: state.posts.length, expanded: true}
                //     } else {
                //         return {postsToShow:3, expanded: false};
                //     }


            };

        default:
            return state;
    }
}

export let showFullPostActionCreator =(postId)=>{
    console.log(postId);
    return{
        type: fullPost,
        postId
    }
}
export let showPostsPostActionCreator = ()=>{
    return{
        type: showPosts
    }
}

export default postsReduser;