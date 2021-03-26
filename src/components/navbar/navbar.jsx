import React, { useState } from 'react'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [visible, setVisible] = useState('')

  function changeCar(props) {
    return (
      <ul>
        <li className={props}>c</li>
        <li className={props}>o</li>
        <li className={props}>d</li>
        <li className={props}>d</li>
        <li className={props}>i</li>
        <li className={props}>n</li>
        <li className={props}>g</li>
      </ul>
    )
  }

  function openNav() {
    return (
      <button
        className="nav-btn open-btn"
        onClick={() => setVisible('visible')}
      >
        <i className="fas fa-bars"></i>
      </button>
    )
  }

  function closeNav() {
    return (
      <button onClick={() => setVisible('')} className="nav-btn close-btn">
        <i className="fas fa-times"></i>
      </button>
    )
  }

  return (
    <>
      {openNav()}
      <div className={`nav ${visible} nav-black`}>
        <div className={`nav ${visible} nav-blue`}>
          <div className={`nav ${visible} nav-white`}>
            {closeNav()}
            <div className="main_div">
              <div className="center_div">{changeCar('new-font')}</div>
            </div>
            <ul className="list">
              <li>
                <i className="fa fa-user mx-2">
                  &nbsp; <Link to="/">Login</Link>
                </i>
              </li>
              <li>
                <i className="fa fa-plus mx-2">
                  &nbsp; <Link to="/newUser">Cadastrar</Link>
                </i>
              </li>
              <li>
                <i class="fas fa-chalkboard-teacher">
                  &nbsp; <Link to="/registerEvent">Eventos</Link>
                </i>
              </li>
              <li>
                <a href="#">Meus Eventos</a>
              </li>
              <li>
                <a href="#">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
