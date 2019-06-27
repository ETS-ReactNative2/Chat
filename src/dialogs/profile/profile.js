import React from 'react';
import MyPostsContainer from "./myPosts/myPostsContainer";
import ProfileInfo from "./profileInfo";



const Profile =(props)=>{

    return (
        <div className="profile">
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    )
}
export default Profile;
