import React from 'react'
import ItemTitle from './ItemTitle'
import ItemPrice from './ItemPrice'
import ItemDetail from './ItemDetailContainer'
import ItemBtn from './ItemBtn'

const IteminfoContainer = () => {
  return (
    <div className='itemInfo-container'>
      <div className='itemInfo'>
        <ItemTitle text='untitle' /> 
        <ItemPrice />
        <ItemDetail />
      </div>
    </div>
  )
}

export default IteminfoContainer