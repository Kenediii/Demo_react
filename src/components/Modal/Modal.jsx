import { useEffect } from 'react'
import s from './Modal.module.css'

const Modal = ({children, title = 'Default modal', onClose }) => {
// до цього handleBackDropClick все робило 
    const handleBackDropClick = e => {
        console.log('TARGET :>>>>', e.target)
        console.log('CURRENT TARGET :>>>>', e.currentTarget)
        if(e.target === e.currentTarget){
            onClose()
        }
        
    }
 // до цього  все робило 

useEffect(() => {
    const  hadleKeyDown = e => {
        console.log(e.key);
        if(e.key === 'Escape') {
            onClose()
        }
    }
    document.addEventListener('keydown', hadleKeyDown)
},[onClose])


    return (
        <div className={s.wrapper} onClick={handleBackDropClick}>
            <div className={s.content}>
                <>
                    <h1>{title}</h1>
                    <hr />
                </>
                <button className={s.closeBtn} onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    )
}

export default Modal 