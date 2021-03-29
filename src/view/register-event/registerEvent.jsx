import React, { useState } from 'react'
import '../register-event/registerEvent.css'
import Navbar from '../../components/navbar/navbar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import firebase from '../../config/firebase'
import {
  errorNotification,
  notification,
} from '../../components/toastify/toastify'
import { useSelector } from 'react-redux'

function RegisterEvent() {
  const [title, setTitle] = useState()
  const [type, setType] = useState()
  const [details, setDetails] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [file, setFile] = useState()
  const userEmail = useSelector((state) => state.userEmail)
  const [send, setSend] = useState(false)

  const storage = firebase.storage()
  const db = firebase.firestore()

  function catalog() {
    storage
      .ref(`imagens/${file.name}`)
      .put(file)
      .then(() => {
        db.collection('eventos')
          .add({
            title,
            type,
            details,
            date,
            hour,
            file: file.name,
            user: userEmail,
            visualizations: 0,
            public: 1,
            createAt: new Date(),
          })
          .then(() => {
            notification('Evento Cadastrado com Sucesso!')
            setSend(false)
          })
          .catch((erro) => {
            setSend(false)
            errorNotification('Não foi possível realizar a operação')
          })
      })
  }

  return (
    <div className="div_register_event">
      <Navbar></Navbar>
      <main className="menu-area">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">Novo evento</h3>
        </div>
        <form>
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </div>
          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select
              className="form-control"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option disabled selected value>
                --Selecione um Tipo--
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição do Evento:</label>
            <textarea
              rows="3"
              className="form-control"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            ></textarea>
          </div>
          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              ></input>
            </div>
            <div className="col-6">
              <label>Hora:</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setHour(e.target.value)}
                value={hour}
              ></input>
            </div>
          </div>

          <div className="form-group">
            <label>Upload da Foto:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>

          <div className="form-group my-3 text-center d-flex flex-row justify-content-center">
            {send ? (
              <CircularProgress></CircularProgress>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="btn-event"
                onClick={() => {
                  catalog()
                  setSend(true)
                }}
              >
                Publicar
              </Button>
            )}
            <Button
              variant="contained"
              className="btn-event mx-3 d-flex"
              onClick={(e) => {
                setTitle('')
                setType('')
                setDetails('')
                setDate('')
                setHour('')
                setFile('')
              }}
            >
              Limpar
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RegisterEvent
