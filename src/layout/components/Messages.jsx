import React, { useEffect } from 'react'
import props from '../resource/json/props.json'
import messages from '../resource/image/svg/routes/messages.svg'
import Scrollbar from 'smooth-scrollbar'

export default function Messages () {

    useEffect (() => {
        Scrollbar.init(document.querySelector('.messages--content'));
    }, [])

    return (
        <li className="dropdown messages">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="messages__button">
                    <img src={messages} alt={props.watch.caption} className="messages__icon" />
                </div>
            </button>

            <nav className="messages__nav dropdown-menu dropdown-menu-end">
                <header className="messages__content">
                    <h1 className="messages__title">Notificaciones</h1>
                </header>
                
                <hr className="dropdown-divider" />
                
                <menu className="messages__content messages--content">

                </menu>
            </nav>
        </li>
    )
}
