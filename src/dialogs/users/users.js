import React from 'react';
import * as axios from 'axios';
import  userPhoto from '../../img/Bean_Avatar.jpg'


const Users =(props)=>{
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items);
        });

    }
    return <div>
        {props.users.map(user =>
            <div key={user.id}>
                <span>
                    <div><img src={user.photos.small != null ? user.photos.small : userPhoto} className="userPhoto" alt="userPhoto"/></div>
                    <div>
                        {user.subscribe ?
                            <button onClick={()=>{props.unsubscribe(user.id)}}> subscribe</button>
                        :
                            <button onClick={()=>{props.subscribe(user.id)}}>unsubscribe</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users;