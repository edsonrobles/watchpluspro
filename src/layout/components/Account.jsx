import React, { useEffect } from 'react'
import props from '../resource/json/props.json'
import profile from '../resource/image/layout/profile.png'
import Scrollbar from 'smooth-scrollbar'

export default function Account ({children}) {

    useEffect (() => {
        Scrollbar.init(document.querySelector('.account--content'));
    }, [])

    return (
        <li className="dropdown account">
            <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile} alt={props.watch.caption} className="account__avatar" />
            </button>
            
            <nav className="account__nav dropdown-menu dropdown-menu-end">
                <header className="account__content">
                    <figure className="account__profile">
                        <img src={profile} alt={props.watch.caption} className="account__avatar" />
                        <figcaption className="account__content">
                            <h1 className="account__title">#SomosWatch</h1>
                            <p className="account__caption">Del 6 al 12 de Octubre</p>
                        </figcaption>
                    </figure>
                </header>

                <hr className="dropdown-divider" />
                
                <menu className="account__content account--content">
                    <li className="account__section">
                        <header className="account__heading">
                            <h2 className="account__title account--title">síguenos en redes sociales</h2>
                            <i className="account__title account--title bi bi-chevron-down"></i>
                        </header>
                        <menu className="account__networks">
                            {props.watch.networks.map ((social) => (
                                <li className={`account__social bg-${social.key}`} key={social.key} title="@watchpluspro">
                                    <a href={social.route} target="blank"><i className={social.icon}></i></a>
                                </li>
                            ))}
                        </menu>
                    </li>
                    
                    <li className="account__section">
                        <header className="account__heading">
                            <h2 className="account__title account--title">populares</h2>
                            <i className="account__title account--title bi bi-chevron-down"></i>
                        </header>
                        <menu className="account__networks account--networks">
                            {props.watch.hashtag.map ((hash) => (
                                <li className="account__route account--route" key={hash.key}>
                                    <a href={hash.route} target="blank" className="account__hashtag">
                                        <div className={`account__social account--social bg-${hash.key}`}>
                                            <i className="bi bi-hash"></i>
                                        </div>
                                        <p className="account__title leading-3">
                                            #{hash.title}
                                            <span className="block account__caption">{hash.post}</span>
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </menu>
                    </li>
                    
                    <li className="account__section">
                        <header className="account__heading">
                            <h2 className="account__title account--title">nuestros socios</h2>
                            <i className="account__title account--title bi bi-chevron-down"></i>
                        </header>
                        <menu className="account__networks account--networks">
                            {props.watch.partners.map ((partner) => (
                                <li className="account__route account--route" key={partner.company}>
                                    <figure className="account__hashtag relative">
                                        <a href={partner.route} target="blank" className="absolute z-10 w-full h-full">{children}</a>
                                        <img src={partner.avatar} alt={partner.company} className="account__social" />
                                        <figcaption>
                                            <p className="account__partner">
                                                {partner.company}
                                                <span className="block account__caption">{partner.caption}</span>
                                            </p>
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </menu>
                    </li>
                </menu>
            </nav>
        </li>
    )
}
