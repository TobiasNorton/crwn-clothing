import React from 'react'
import './style.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, size, imageUrl, linkUrl, history, match }) => {
  const uppercaseTitle = title && title.toUpperCase()
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="content">
        <h1 className="category">{uppercaseTitle}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
