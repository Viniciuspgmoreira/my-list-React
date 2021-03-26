import React from 'react'
import '../home/home.css'
import Navbar from '../../components/navbar/navbar'
import { useSelector } from 'react-redux'

function Home() {
  return (
    <>
      <div className="home-page">
        <h1
          style={{ fontSize: '30px', marginLeft: '100px' }}
          className="text-white"
        >
          {useSelector((state) => state.userEmail)}
          <br></br>
          {useSelector((state) => state.userLoggedIn)}
        </h1>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default Home
