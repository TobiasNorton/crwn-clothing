import React from 'react'
import './style.scss'

const CustomButton = ({ children, type }) => {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  )
}

export default CustomButton
