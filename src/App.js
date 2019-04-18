import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./test";
import Calculator from "./Calculator";
import Game from "./ticTac/game";
import Header from "./dialogs/header";
import Navbar from "./dialogs/navbar";
import Profile from "./dialogs/profile/profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./dialogs/dialogs/dialogsContainer";
import UsersContainer from "./dialogs/users/usersContainer";

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
                    text: 'Считаю, что $ должен стоить 35 рублей!'
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
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
              <div className="users">
                  {this.state.users.map((itm)=>{
                      return <li className="userItm" key={itm.id}>{itm.name} {itm.lastName} {itm.text}</li>
                  })}
              </div>
              <Test height="100px"/>
              <Calculator/>
              <Game/>

              <div className="app-wrapp">
                  <Header/>
                  <div className="body-wrapp">
                      <Navbar/>
                      <div className="body-wrapp-content">
                          <Route exact path="/profile" render={ () => <Profile/>}/>
                          <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                          <Route path="/users" render={ () => <UsersContainer/>}/>
                      </div>
                  </div>
              </div>

          </div>
    );
  }
}

export default App;
