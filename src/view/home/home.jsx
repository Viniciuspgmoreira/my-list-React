import React, { useState, useEffect } from 'react'
import '../home/home.css'
import Navbar from '../../components/navbar/navbar'
import { useSelector } from 'react-redux'
import Card from '../../components/event-card/card'
import firebase from '../../config/firebase'

function Home({ match }) {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState('')
  const userEmail = useSelector((state) => state.userEmail)
  let eventsList = []
  useEffect(() => {
    if (match.params.parametro) {
      firebase
        .firestore()
        .collection('eventos')
        .where('user', '==', userEmail)
        .get()
        .then(async (resp) => {
          await resp.docs.forEach((doc) => {
            if (doc.data().title.indexOf(search) >= 0) {
              eventsList.push({
                id: doc.id,
                ...doc.data(),
              })
            }
          })

          setEvents(eventsList)
        })
    } else {
      firebase
        .firestore()
        .collection('eventos')
        .get()
        .then(async (resp) => {
          await resp.docs.forEach((doc) => {
            if (doc.data().title.indexOf(search) >= 0) {
              eventsList.push({
                id: doc.id,
                ...doc.data(),
              })
            }
          })

          setEvents(eventsList)
        })
    }
  })

  return (
    <div className="home-page">
      <Navbar></Navbar>
      <main className="menu-area home-area ">
        <div className="col-6 row rowCards">
          {events.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              img={item.file}
              title={item.title}
              details={item.details}
              visualizations={item.visualizations}
            ></Card>
          ))}
        </div>
      </main>
      <header className="header">
        <h1 className="text-white my-4">Eventos Publicados</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar Evento pelo Titulo"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </header>
    </div>
  )
}

export default Home
