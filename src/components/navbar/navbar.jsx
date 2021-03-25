import React, { useState } from 'react'
import '../navbar/navbar.css'

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

  function openNav(props) {
    return (
      <button
        className="nav-btn open-btn"
        onClick={() => setVisible('visible')}
      >
        <i className="fas fa-bars"></i>
      </button>
    )
  }

  function closeNav(props) {
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
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life</a>
              </li>
              <ul>
                <li>
                  <a href="#">How to do it</a>
                </li>
                <li>
                  <a href="#">Witch API</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
