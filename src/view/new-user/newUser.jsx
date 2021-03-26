import React, { useState } from 'react'
import firebase from '../../config/firebase'
import 'firebase/auth'
import './newUser.css'
import Button from '@material-ui/core/Button'
import Navbar from '../../components/navbar/navbar'
import {
  notification,
  errorNotification,
  warningNotification,
} from '../../components/toastify/toastify'

function NewUser() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [visible, setVisible] = useState('password')
  const [eyeSlash, seteyeSlash] = useState('fa fa-eye toggle-eye')

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

  function showPassword(props) {
    let visible = props
    console.log(props)
    if (visible === 'password') {
      setVisible('text')
    } else if (visible !== 'password') {
      setVisible('password')
    }
  }
  function showIcon(props) {
    let eyeSlash = props
    if (eyeSlash === 'fa fa-eye toggle-eye') {
      seteyeSlash('fa fa-eye-slash toggle-eye')
    } else {
      seteyeSlash('fa fa-eye toggle-eye')
    }
  }

  return (
    <div className="container-fluid div_main_register">
      <Navbar></Navbar>
      <div className="board_register">
        <form className="text-center form-login mx-auto">
          <h3 className="mb-3 font-weight-bold">Cadastrar novo Usuário</h3>
          <div className="email_input_register">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <input
              id="email"
              type="email"
              className="form-control my-2"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="password_input_register">
            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
            <input
              type={visible}
              className="form-control my-2"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <i
              className={eyeSlash}
              aria-hidden="true"
              onClick={() => {
                showPassword(visible)
                showIcon(eyeSlash)
              }}
            ></i>
          </div>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className="mx-3"
            onClick={register}
          >
            Salvar
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={(e) => {
              setPassword('')
              setEmail('')
            }}
          >
            Cancelar
          </Button>
        </form>
      </div>
    </div>
  )
}
export default NewUser
