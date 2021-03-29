import React, { useState, useEffect } from 'react'
import '../home/home.css'
import Navbar from '../../components/navbar/navbar'
import { useSelector } from 'react-redux'
import Card from '../../components/event-card/card'
import firebase from '../../config/firebase'

function Home() {
  const [events, setEvents] = useState([])

  let eventsList = []
  useEffect(() => {
    firebase
      .firestore()
      .collection('eventos')
      .get()
      .then(async (resp) => {
        await resp.docs.forEach((doc) => {
          eventsList.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        setEvents(eventsList)
      })
  }, [])

  return (
    <div className="home-page">
      <Navbar></Navbar>
      <div className="row" id="rowDiv">
        <h1
          style={{
            fontSize: '30px',
            marginLeft: '100px',
            display: 'flex',
            flexDirection: 'row',
          }}
          className="text-white"
        >
          {useSelector((state) => state.userEmail)}
          <br></br>
          {useSelector((state) => state.userLoggedIn)}
        </h1>
        {events.map((item) => (
          <Card
            key={item.id}
            img={item.file}
            title={item.title}
            details={item.details}
            visualizations={item.visualizations}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default Home
