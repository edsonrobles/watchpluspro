import React from 'react'
import props from '../resource/json/props.json'
import Logotype from '../resource/image/svg/layout/rbandlr.svg'

export default function Optical ({children, position}) {
    return (
        <aside className={`watch__advertising ${position}`}>
            <figure className="rbandlr">
                {/* <img src="" alt="" className="rbandlr__advert" /> */}
                
                <figcaption className="rbandlr__wrapper">
                    <header className="rbandlr__header">
                        <h1 className="rbandlr__copy">
                            Todo inicia desde tu logotipo.
                            <span className="block">Materializa tus ideas, posicionate y destaca entre los demás</span>
                        </h1>
                        <p className="rbandlr__caption">identdad + branding digital</p>
                        <img src={Logotype} alt={props.rbandlr.caption} className="rbandlr__logotype" />
                    </header>
                    
                    <footer className="rbandlr__footer">
                        <p className="rbandlr__copy rbandlr--copy">
                            <a href="https://rbandlr.netlify.app/portafolio.html" target="blank" className="rbandlr__button">
                                ver portfolio
                                <i className="bi bi-arrow-right ml-2"></i>
                            </a>
                        </p>
                        <p className="rbandlr__caption rbandlr--caption">
                            <a href="https://rbandlr.netlify.app/contactos.html" target="blank" className="absolute w-full h-full">{children}</a>
                            contáctenos y haz crecer tu negocio
                        </p>
                    </footer>
                </figcaption>
            </figure>
        </aside>
    )
}
