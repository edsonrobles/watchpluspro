import React from 'react'
import props from '../resource/json/props.json'
import logotype from '../resource/image/svg/layout/watchplus.svg'

export default function Footer ({position}) {
    return (
        <footer className={`footer ${position}`}>
            <img src={logotype} alt={props.watch.caption} className="footer__logotype order-1" />
            <nav className="footer__nav order-3">
                <menu className="footer__networks">
                    {props.watch.networks.map ((social) => (
                        <li key={social.key} title="@watchpluspro">
                            <a href={social.route} target="blank"><i className={social.icon}></i></a>
                        </li>
                    ))}
                </menu>
            </nav>
            <p className="footer__imppresum order-2">© 2022 Watch +. Todos los derechos reservados.All rights reserved 2022</p>
            <p className="footer__imppresum order-4">Watch + es un servicio por suscripción de pago semanal, su contenido está sujeto a disponibilidad. <span className="block">El servicio Watch + es comercializado por <a href="https://rbandlr.netlify.app" className="footer--imppresum">RB&LR Brand Studio & Digital  Content.</a></span></p>
        </footer>
    )
}
