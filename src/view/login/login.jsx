import React, { useState } from 'react'
import './login.css'
import {
  notification,
  warningNotification,
  errorNotification,
} from '../../components/toastify/toastify'

import firebase from '../../config/firebase'
import 'firebase/auth'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        notification('Logado com sucesso')
      })
      .catch((erro) => {
        console.log(erro.message)
        switch (erro.message) {
          case 'The email address is badly formatted.':
            warningNotification('O email não está formatado corretamente')
            break
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            warningNotification(
              'Os dados não são compativeis com nenhum usuário cadastrado, favor verificar'
            )
            break
          default:
            break
        }
      })
  }

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
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Digite a Senha..."
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button
          className="btn btn-lg btn-secondary btn-block btn-login"
          type="button"
          onClick={logar}
        >
          Entrar
        </button>
        <div className="login-options">
          <a href="/#" className="mx-2  text-center">
            Recuperar Senha
          </a>
          <a href="/#" className="mx-2  text-center">
            Cadastrar
          </a>
          <p className="mt-5 mb-3 text-muted text-center">&copy;2020-2021</p>
        </div>
      </form>
    </div>
  )
}

export default Login
