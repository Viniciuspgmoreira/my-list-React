import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import '../recoveryPassword/recoveryPassword.css'
import Button from '@material-ui/core/Button'
import firebase from '../../config/firebase'
import 'firebase/auth'

function RecoveryPassword() {
  const [check, setCheck] = useState('false')
  const [email, setEmail] = useState()
  const [msg, setMsg] = useState()
  const [icon, setIcon] = useState()
  const [color, setColor] = useState()

  function verify() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((resp) => {
        setCheck('')
        setMsg('Email Enviado com Sucesso')
        setIcon(`fa fa-check mx-1`)
        setColor('green')
      })
      .catch((erro) => {
        console.log(erro.message)
        setCheck('')
        setIcon(`fa fa-exclamation mx-1`)
        setColor('red')
        switch (erro.message) {
          case 'The email address is badly formatted.':
            setMsg('O email não está formatado corretamente')
            break
          case 'There is no user record corresponding to this identifier. The user may have been deleted.':
            setMsg(
              'Os dados não são compativeis com nenhum usuário cadastrado, favor verificar'
            )
            break
          default:
            setMsg('Reporte o erro para o Administrador do Sistema')
            break
        }
      })
  }
  return (
    <div className="container-fluid div_main">
      <Navbar></Navbar>
      <div className="board">
        <form className="text-center form-login mx-auto">
          <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
          <label>Digite o Email cadastrado:</label>
          <div className="email_input">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <Button
              className="ui-button"
              style={{ marginLeft: '15px' }}
              variant="contained"
              size="small"
              onClick={verify}
            >
              verify
            </Button>
          </div>

          {check === false ? null : (
            <label style={{ color: color }} hidden={check}>
              <i class={icon} aria-hidden="true"></i>
              {msg}
            </label>
          )}
        </form>
      </div>
    </div>
  )
}

export default RecoveryPassword
