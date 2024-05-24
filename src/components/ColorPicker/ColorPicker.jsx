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
                        {colors.map(palette  => (
                            <li style={{ backgroundColor: palette.color }} onClick={()=> setCurrentColor(palette.color)} className={s.item} key={palette.id}> 
                                {palette.color}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default ColorPicker