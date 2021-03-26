import React from 'react'
import '../register-event/registerEvent.css'
import Navbar from '../../components/navbar/navbar'
import Button from '@material-ui/core/Button'

function RegisterEvent() {
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
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>Tipo do Evento:</label>
            <select className="form-control">
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
            <textarea rows="3" className="form-control"></textarea>
          </div>
          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input type="date" className="form-control"></input>
            </div>
            <div className="col-6">
              <label>Hora:</label>
              <input type="time" className="form-control"></input>
            </div>
          </div>

          <div className="form-group">
            <label>Upload da Foto:</label>
            <input type="file" className="form-control"></input>
          </div>

          <div className="form-group my-3 text-center">
            <Button variant="contained" color="primary" className="btn-event">
              Publicar
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default RegisterEvent
