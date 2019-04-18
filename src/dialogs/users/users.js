import React from 'react';

const Users =(props)=>{
    if (props.users.length == 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg',
                subscribe: false, fullName: 'Sasha', status: 'boss', location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://ichef.bbci.co.uk/news/912/mcs/media/images/80258000/jpg/_80258798_avatar_getty.jpg',
                subscribe: true,
                fullName: 'Katya',
                status: 'boss',
                location: {city: 'Kharkov', country: 'Ukraine'}
            },
            {
                id: 3, photoUrl: 'https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg',
                subscribe: false, fullName: 'Petya', status: 'boss', location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }
    return <div>
        {props.users.map(user=>
            <div key={user.id}>
                <span>
                    <div><img src={user.photoUrl} className="userPhoto"/></div>
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
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users;