import React, { useState } from 'react'
import firebase from '../../config/firebase'
import 'firebase/auth'
import './newUser.css'
import Input from '../../components/input/input.component'
import {
  notification,
  errorNotification,
  warningNotification,
} from '../../components/toastify/toastify'

function NewUser() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        notification('Cadastrado com Sucesso')
      })
      .catch((erro) => {
        switch (erro.message) {
          case 'Password should be at least 6 characters':
            warningNotification('A senha deve ter pelo menos 6 caracteres!')
            break
          case 'The email address is already in use by another account.':
            warningNotification(
              'Este email já está sendo utilizado por outro usuário!'
            )
            break
          case 'The email address is badly formatted.':
            warningNotification('O formato do seu email é inválido!')
            break
          default:
            errorNotification(
              'Não foi possível cadastrar. Tente novamente mais tarde!'
            )
            break
        }
      })
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
