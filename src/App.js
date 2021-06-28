import React from 'react'
import './App.css'
import HomePage from './pages/homepage'
import { Switch, Route } from 'react-router-dom'

const Hats = () => {
  return <h1>HATS!</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  )
}

export default App
