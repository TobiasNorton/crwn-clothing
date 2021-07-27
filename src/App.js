import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop-page'
import Header from './components/header'

const Hats = () => {
  return <h1>HATS!</h1>
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <div className="page-container">
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/shop" component={ShopPage} />
        </div>
      </Switch>
    </div>
  )
}

export default App
