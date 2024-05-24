import Header from './Header'
import List from './List'

import s from './ProductsApp.module.css'
import productData from '../../assets/products.json'
import { useState } from 'react'
import Cart from './Cart'
import Counter from '../Counter/Counter'
import ColorPicker from '../ColorPicker/ColorPicker'
import { TodoList } from '../TodoList/TodoList'

const ProductsApp = () => {
    console.log(productData);
    /* в ліст я маю передавати ці продукти з джейсона я буду робити це через стейт я пишу конст використовую хук юс стейт для того щоб записати данні в стейт щоб вони були 
    дінамічними  в мій лист має потрапляти пропсами цей айтемс і в листі я маю прийняти ці пропси*/
    const [items, setItems] = useState(productData)

    const [selectedTab, setSelectedTeab] = useState('home')

    return (
        <>
           <Header chengeTab={setSelectedTeab}/>
           <div className={s.container }> 
           {selectedTab === 'home' && <List items={items}/>}
           {selectedTab === 'cart' && <Cart/>}   
           {selectedTab === 'counter' && <Counter/>}
           {selectedTab === 'colorpicker' && <ColorPicker/>}
           {selectedTab === 'todolist' && <TodoList/>}
            </div>
        </>
    )
}

export default ProductsApp