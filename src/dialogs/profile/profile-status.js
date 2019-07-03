import React, {Fragment} from 'react';


class ProfileStatus extends React.Component{
    state={
        editMode: false
    }

    activeEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
    }

render() {
    return (
        <Fragment>
            {this.state.editMode ?
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                </div>
                :
                <div className="profileStatus">
                <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                </div>
            }
        </Fragment>
    )
}


}
export default ProfileStatus;
