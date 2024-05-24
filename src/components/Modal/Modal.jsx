import s from './Modal.module.css'

const Modal = ({children, title = 'Default modal', onClose }) => {
// до цього handleBackDropClick все робило 

 
    return (
        <div className={s.wrapper}>
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