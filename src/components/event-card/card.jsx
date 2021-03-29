import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../event-card/card.css'
import firebase from '../../config/firebase'

function Card({ id, key, img, file, details, visualizations, title }) {
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    firebase
      .storage()
      .ref(`imagens/${img}`)
      .getDownloadURL()
      .then((url) => setUrlImage(url))
  }, [urlImage])

  return (
    <div className="col-md-3 col-sm-12 border-card">
      <img
        src={urlImage}
        className="card-img-top img-cartao"
        alt="Imagem do Evento"
      ></img>
      <div className="card-body">
        <h5>{title}</h5>
        <p className="card-text text-justify">{details}</p>
        <div className="rodape-card align-items-center">
          <div className="col-6 row">
            <Link to={'/eventdetails' + id} className="btn btn-sm btn-detalhes">
              +detalhes
            </Link>
            <div className="col-6">
              <i className="fas fa-eye">
                <span>{visualizations}</span>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
