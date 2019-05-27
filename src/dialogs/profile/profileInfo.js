import React from 'react';
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../img/Bean_Avatar.jpg";



const ProfileInfo =(props)=>{
    console.log("ProfileInfo", props.profile)
    if(!props.profile){
        return <Preloader/>
    }
    console.log("Info", props)
    return (
        <div className="profile">
            <div>
                <img src={props.profile.photos.large != null ||
                          props.profile.photos.large != undefined ?
                          props.profile.photos.large
                          : userPhoto}/>
            </div>
            <p>{props.profile.fullName}</p>
            <p>{props.profile.aboutMe}</p>
            <div>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.instagram}</p>
            </div>

        </div>

    )
}
export default ProfileInfo;
