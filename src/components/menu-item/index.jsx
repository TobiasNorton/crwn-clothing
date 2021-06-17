import React from 'react'
import './style.scss'

const MenuItem = ({ id, title, size, imageUrl, linkUrl }) => {
  const uppercaseTitle = title && title.toUpperCase()
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <h1 className="category">{uppercaseTitle}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
