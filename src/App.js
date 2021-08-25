import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop-page'
import Header from './components/header'
import { auth } from './firebase/firebase.utils'

const Hats = () => {
  return <h1>HATS!</h1>
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState(
        {
          currentUser: user,
        },
        () => console.log('user', user)
      )
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
