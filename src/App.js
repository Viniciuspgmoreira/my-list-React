import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../src/store/index'
import { Provider } from 'react-redux'
import Login from './view/login/login'
import NewUser from './view/new-user/newUser';
import Home from '../src/view/home/home'
import RecoveryPassword from '../src/view/recoveryPassword/recoveyPassword'
import RegisterEvent from '../src/view/register-event/registerEvent'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/newUser" component={NewUser}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/recoveryPassword" component={RecoveryPassword}></Route>
        <Route exact path="/registerEvent" component={RegisterEvent}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
