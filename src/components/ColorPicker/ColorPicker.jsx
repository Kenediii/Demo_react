import s from './ColorPicker.module.css'
import colors from '../../assets/colors.json'
import { useState } from 'react'

export const ColorPicker = () =>  {
    const [currentColor, setCurrentColor] = useState('white')
    return (
        <section style={{ backgroundColor: currentColor }} className={s.section_color}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <h2  className={s.title}>Current color: {currentColor}</h2>
                    <ul className={s.list}>
                        {colors.map(item => (
                            <li style={{ backgroundColor: item.color }} onClick={()=> setCurrentColor(item.color)} className={s.item} key={item.id}> 
                                {item.color}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default ColorPicker