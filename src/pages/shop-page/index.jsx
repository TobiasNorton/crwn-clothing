import React, { Component } from 'react'
import './style.scss'
import COLLECTIONS_DATA from './collections-data'
import CollectionPreview from '../../components/collection-preview'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: COLLECTIONS_DATA,
    }
  }
  render() {
    console.log('this.state.collections', this.state.collections)
    return (
      <div>
        {this.state.collections.map((collection) => {
          const { id, title, items } = collection
          return <CollectionPreview key={id} title={title} items={items} />
        })}
      </div>
    )
  }
}

export default ShopPage
