import React from 'react';
import * as axios from 'axios/index';
import userPhoto from '../../img/Bean_Avatar.jpg'



class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
    //         });
    //     }
    // }
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        console.log("users", this.props);
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( page =>{
                       return <span className={this.props.currentPage === page ? "currentPage" :""} onClick={(e) => {this.onPageChanged(page)}}>{page}</span>
                    })}


                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.users.map(user =>
                    <div key={user.id}>
                <span>
                    <div><img src={user.photos.small != null ? user.photos.small : userPhoto} className="userPhoto"
                              alt="userPhoto"/></div>
                    <div>
                        {user.subscribe ?
                            <button onClick={() => {
                                this.props.unsubscribe(user.id)
                            }}> subscribe</button>
                            :
                            <button onClick={() => {
                                this.props.subscribe(user.id)
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
}

export default Users;
