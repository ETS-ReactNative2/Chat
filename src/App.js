import React, { Component } from 'react';
import './App.css';
import Calculator from "./calculator/Calculator";
import Game from "./ticTac/game";
import Navbar from "./dialogs/navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./dialogs/dialogs/dialogsContainer";
import UsersContainer from "./dialogs/users/usersContainer";
import TestMap from "./testMap";
import PostsContainer from "./posts/postsContainer";
import ProfileContainer from "./dialogs/profile/profileContainer";
import HeaderContainer from "./dialogs/header/headerContainer";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id:4578,
                    name:"Michael",
                    lastName:"K",
                    department:"dev",
                    text:'В четверг, четвертого числа...'
                },
                {
                    id:3589,
                    name:"Nata",
                    lastName:"R",
                    department:"dev",
                    text: 'sunny day'
                }
            ],
            temperature:""
        }
    }
    handleChange=(e)=>{
        this.setState({temperature: e.target.value})
    }
    render() {
        console.log("App",this.props.addPost);
    return (
              <div className="app-wrapp">
                  <HeaderContainer/>
                  <div className="body-wrapp">
                      <Navbar/>
                      <div className="body-wrapp-content">
                          <Route exact path="/" render={ () => <ProfileContainer/>}/>
                          <Route path="/profile/:userId?" render={ () => <ProfileContainer/>}/>
                          <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                          <Route path="/users" render={ () => <UsersContainer/>}/>
                          <Route path="/ticTac" render={()=>  <Game/>}/>
                          <Route path="/calculator" render = {()=> <Calculator/>}/>
                          <Route path="/testMap" render = {()=> <TestMap users={this.state.users}/>}/>
                          <Route path="/blog" render={()=><PostsContainer/>}/>
                      </div>
                  </div>
              </div>

    );
  }
}

export default App;
