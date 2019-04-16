import React from 'react';



const Post =(props)=>{
    return (<div className="Post">
            <div className="postImg"></div>
            <div className="item">{props.message}</div>
            <div>
                <span>Like {props.likesCount}</span>
            </div>

        </div>

    )
}
export default Post;