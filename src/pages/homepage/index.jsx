import React from 'react'
import './style.scss'
import Directory from '../../components/directory'
import MenuItem from '../../components/menu-item'

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
      {/* <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="category">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <MenuItem title="JACKETS" subtitle="SHOP NOW" />
        <div className="menu-item">
          <div className="content">
            <h1 className="category">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="category">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="category">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="category">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default HomePage
