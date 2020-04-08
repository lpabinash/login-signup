import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from "./videocard"
import Background from './Components/Background';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import Example from './Components/Weather'
import Todo from './Components/Todo'
import Topbar from './Topbar'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';


class App extends React.Component  {

  // componentDidMount() {
  //     localStorage.setItem('TODO',JSON.stringify(["todo1",'todo2']))
  // }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        {/* <Counter/> */}
        <Topbar/>
        <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/"  />
        </Switch>
        {/* <Background/>
        <Example />
        <Todo/> */}
       
      {/* <ReactWeather forecast="today" apikey="ac9589d4e20d2570510d5868d99875f2" /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
