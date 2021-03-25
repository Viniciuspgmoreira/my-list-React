import React, { useState } from 'react'
import firebase from '../../config/firebase'
import 'firebase/auth'
import './newUser.css'
import Input from '../../components/input/input.component'
import {
  notification,
  errorNotification,
} from '../../components/toastify/toastify'

function NewUser() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function register() {
    if (!email) {
      errorNotification('Email está preenchido incorretamente')
    } else if (!password) {
      errorNotification('Senha foi preenchida incorretamente')
    } else if (/\s/.test(email)) {
      errorNotification('Não pode conter espaços em branco no Usuário')
    }
  }

  return (
    <div className="form-cadastro">
      <form className="text-center form-login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
        <Input
          type="email"
          placeholder="E-mail"
          id="inputEmail"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Senha"
          id="inputPassword"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <button
          type="button"
          className="btn btn-lg btn-block mt-3 mb-5 btn-register"
          onClick={register}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default NewUser
