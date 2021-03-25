import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from '../src/view/login/login'
import NewUser from '../src/view/new-user/newUser'

ReactDOM.render(
  <React.StrictMode>
    <NewUser />
  </React.StrictMode>,
  document.getElementById('root')
)