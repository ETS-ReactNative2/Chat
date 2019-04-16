import React from 'react';
import Post from "./post/post";


const MyPosts =(props)=>{
    console.log("myPosts", props);
    let postsElements = props.posts.map(post => <Post message = {post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();



    let addPost = ()=>{
       props.addPost();
    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (<div className="myPosts">
                <h2>My Posts</h2>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Add post</button>
                {postsElements}
            </div>

    )
}
export default MyPosts;