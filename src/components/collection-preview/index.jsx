import React from 'react'
import './style.scss'
import CollectionItem from '../collection-item'

const CollectionPreview = ({ title, items }) => {
  const firstFourProducts = items.filter((item, index) => index < 4)
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {firstFourProducts.map((item) => {
          const { id, name, imageUrl, price } = item
          return <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
        })}
      </div>
    </div>
  )
}

export default CollectionPreview
