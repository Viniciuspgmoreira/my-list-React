import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './view/login/login'
import NewUser from './view/new-user/newUser';
import Home from '../src/view/home/home'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/newUser" component={NewUser}></Route>
      <Route exact path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
