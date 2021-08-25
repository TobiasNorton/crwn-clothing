import React from 'react'
import './style.scss'

const CustomButton = ({ children, type, onClick, isGoogleSignIn }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton
