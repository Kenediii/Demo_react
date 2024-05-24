import React from 'react'
import ProductCard from './ProductCard'
import s from './ProductsApp.module.css'
import PropTypes from 'prop-types'

export const List = ({ items }) => {
  return (
    <ul className={s.product_list}>
      {items.map(item => <ProductCard key={item.id} item={item}/>)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number
  })
  ),
}

export default List