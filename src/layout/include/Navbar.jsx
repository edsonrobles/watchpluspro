import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import props from '../resource/json/props.json'
import imagotype from '../resource/image/svg/layout/watch.svg'
import featured from '../resource/image/svg/routes/featured.svg'
import recommendation from '../resource/image/svg/routes/recommendation.svg'
import trend from '../resource/image/svg/routes/trend.svg'
import contact from '../resource/image/svg/routes/contact.svg'
import Messages from '../components/Messages'
import Account from '../components/Account'

export default function Navbar ({children}) {

    const [ routes ] = useState([
        { section : "/",                path : "Destacados",      icon : featured       },
        { section : "/recomendaciones", path : "Recomendaciones", icon : recommendation },
        { section : "/tendencias",      path : "Tendencias",      icon : trend          },
        { section : "/contactenos",     path : "Contáctenos",     icon : contact        },
    ])

    return (
        <nav className="navbar">
            <menu className="navbar__wrapper">
                <li className="navbar__imagotype">
                    <Link to="/">
                        <img src={imagotype} alt={props.watch.caption} />
                    </Link>
                </li>
                
                
                <li className="navbar__menu">
                    <menu className="navbar__routes">
                        {routes.map ((route) => (
                            <li className="relative" key={route.section}>
                                <Link to={route.section} className="absolute z-10 w-full h-full">{children}</Link>
                                <span className="navbar__item">{route.path}</span>
                                <img src={route.icon} alt="" className="navbar__icons" />
                            </li>
                        ))}
                    </menu>
                </li>
                
                <li className="navbar__account">
                    <menu className="navbar__dropdown">
                        <Messages />
                        <Account />
                    </menu>
                </li>
            </menu>
        </nav>
    )
}
