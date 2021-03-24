import React from 'react'
import './login.css'
import {
  notification,
  warningNotification,
} from '../../components/toastify/toastify'

function Login() {
  return (
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Digite o Email..."
        ></input>

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Digite a Senha..."
        ></input>

        <button
          className="btn btn-lg btn-secondary btn-block btn-login"
          type="submit"
          onClick={() => notification('Olá')}
        >
          Entrar
        </button>
        <div className="login-options">
          <a href="#" className="mx-2  text-center">
            Recuperar Senha
          </a>
          <a href="#" className="mx-2  text-center">
            Cadastrar
          </a>
          <p className="mt-5 mb-3 text-muted text-center">&copy;2020-2021</p>
        </div>
      </form>
    </div>
  )
}

export default Login
