import React, { useEffect } from 'react'
import Carousel from '../template/Carousel'
import Agency from '../modules/Agency'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function Suggestions (props) {

    useEffect (() => {
        let scene = {
            fixedWidth  : '20rem',
            gap         : '.5rem',
            pagination  : false,
            focus       : 'end',
            arrows      : false,
            breakpoints : {
                408 : { fixedWidth : '95%' }
            }
        }

        new Splide ('.splide-20', scene).mount();
        new Splide ('.splide-21', scene).mount();
        new Splide ('.splide-22', scene).mount();
        new Splide ('.splide-23', scene).mount();
        new Splide ('.splide-24', scene).mount();
        new Splide ('.splide-25', scene).mount();
        new Splide ('.splide-26', scene).mount();
        new Splide ('.splide-27', scene).mount();
        new Splide ('.splide-28', scene).mount();
    }, [])

    const { id, title, poster, datasheet, synopsis, container, genders=[], scenes=[] } = props

    return (
        <article className="suggestions modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <section className="suggestions__content modal-content">
                    <header className="suggestions__header">
                        <nav className="suggestions__nav">
                            <menu className="suggestions__heading suggestions--heading">
                                <li className="order-2"><h2 className="suggestions__title">{title}</h2></li>
                                <li className="order-3"><p className="suggestions__caption">{datasheet}</p></li>
                                <li className="order-4">
                                    <menu className="suggestions__category">
                                        {genders.map ((gender) => (
                                            <li className="suggestions__gender" key={gender}>{gender}</li>
                                        ))}
                                    </menu>
                                </li>
                                <li className="order-1"><img src={poster} alt={title} className="suggestions__poster" /></li>
                            </menu>
                            
                            <menu className="suggestions__heading">
                                <li className="suggestions__cover"><img src={poster} alt={title} className="suggestions__poster suggestions--poster" /></li>
                                <li>
                                    <button type="button" className="suggestions__close" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="bi bi-x"></i>
                                    </button>
                                </li>
                            </menu>
                        </nav>
                    </header>

                    <article className="suggestions__body">
                        <h3 className="suggestions__title order-1">
                            Sinopsis
                            <span className="block suggestions--title">Te contamos un poco acerca de la historia</span>
                        </h3>
                        <p className="suggestions__synopsis order-2">{synopsis}</p>

                        <Agency position={'order-3'} />
                    </article>

                    <fotter className="suggestions__footer">
                        <Carousel nav={true} container={container}>
                            {scenes.map((scene) => (
                                <li className="splide__slide">
                                    <img src={scene} alt={title} key={scene} className="suggestions__scenes" />
                                </li>
                            ))}
                        </Carousel>
                    </fotter>
                </section>
            </div>
        </article>
    )
}
