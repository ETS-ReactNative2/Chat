import React from 'react';
import {connect} from "react-redux";
import {showFullPostActionCreator} from "../redux/postsReducer";
import Posts from "./posts";


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        fullText: state.postsPage.fullText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        fullPost:()=>{
            dispatch(showFullPostActionCreator());
        },

    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;