import React from 'react'
import s from './ProductsApp.module.css'
import  PropTypes  from 'prop-types'

export const Header = ({ chengeTab }) => {
  return (
    <header className={s.header}>
        <h1 onClick={() => chengeTab('home')}>Product React</h1>
        <div> 
        
            <button onClick={() => chengeTab('counter')}>Counter</button>
            <button onClick={() => chengeTab('colorpicker')}>ColorPicker</button>
            <button onClick={() => chengeTab('todolist')}>Todolist</button>
            <button onClick={() => chengeTab('cart')}>Cart</button>
        </div>
    </header>

  )
}

Header.propTypes = {
    chengeTab: PropTypes.func,
}

export default Header
/*  <button onClick={() => chengeTab('cart')}>Cart</button>
і кажемо коли людина буде клікати  на кнопку коунтер буде встановлюватись наш
селектед карт як каунтер 
*/