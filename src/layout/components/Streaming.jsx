import React from 'react'
import { Link } from 'react-router-dom'

export default function Streaming ({watch, cover, copy, title, logotype, caption, route, streaming, children}) {
    return (
        <article className="streaming__card">
            
            {
                watch ?
                <>
                    <h2 className="streaming__content order-2">{title}</h2>
                    <img src={logotype} alt={caption} className="streaming__logotype order-1" />
                    {children}
                </>
                :
                <>
                    <img src={cover} alt={copy} className="streaming__cover" />
                    
                    <header className="streaming__header">
                        <article className="streaming__heading">
                            <h2 className="streaming__content order-2">{title}</h2>
                            <img src={logotype} alt={caption} className="streaming__logotype order-1" />
                        </article>

                        {children}
                    </header>
                    
                    <footer className="streaming__footer">
                        <Link to={`/${route}`} className="streaming__route"></Link>
                        <p className="streaming__content streaming--content">
                            Mira más de
                            {streaming}
                            en Watch +
                        </p>
                        <i className="text-red-500 bi bi-arrow-right"></i>
                    </footer>
                </>
            }
        </article>
    )
}
