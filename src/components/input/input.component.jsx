import React from 'react'

function Input(props) {
  const { type, id, placeholder, onChange } = props
  return (
    <input
      type={type}
      id={id}
      className="form-control my-2"
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  )
}

export default Input
