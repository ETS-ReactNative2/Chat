import React from 'react';
import {connect} from "react-redux";
import {showFullPostActionCreator, showPostsPostActionCreator} from "../redux/postsReducer";
import Posts from "./posts";


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        fullText: state.postsPage.fullText,
        postsToShow: state.postsPage.postsToShow,
        expanded: state.postsPage.expanded
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        fullPost:()=>{
            dispatch(showFullPostActionCreator());
        },
        showPosts:()=>{
            dispatch(showPostsPostActionCreator());
        }

    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;