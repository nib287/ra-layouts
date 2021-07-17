import React from 'react'
import './IconSwitch.css'

function IconSwitch({icon, onSwitch}) {
    return (
        <div className='material-icons' onClick={onSwitch}>{icon}</div>
    )
}

export default IconSwitch


// icon - название иконки, которую хотим показать. 
// Название иконки соответствует названию класса из библиотеки material icons. 
// В нашем случае это - либо view_list, либо view_module.
// onSwitch() - обработчик события, который реагирует на нажатие пользователем 
// на иконку.