import React from 'react'
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render(){

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

});
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);



export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
