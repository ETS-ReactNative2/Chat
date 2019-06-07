import React from 'react'
import userPhoto from "../../img/Bean_Avatar.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
            <div className="pagination">
                {pages.map(page => {
                    return <span className={props.currentPage === page ? "currentPage" : ""} onClick={(e) => {
                        props.onPageChanged(page)
                    }}>{page}</span>
                })}


            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {props.users.map(user =>
                <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className="userPhoto"
                              alt="userPhoto"/>
                        </NavLink>
                    </div>
                    <div>
                        {user.subscribe ?
                            <button disabled={props.subscribeInProgress.some(id=> id === user.id)} onClick={() => {
                                props.toggleSubscribeInProgress(true, user.id)
                            }}> subscribe</button>
                            :
                            <button disabled={props.subscribeInProgress.some(id=> id === user.id)} onClick={() => {
                                props.toggleSubscribeInProgress(false, user.id)
                            }}>unsubscribe</button>
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
    )
}
export default Users;
