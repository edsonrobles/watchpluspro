import React, { useEffect } from 'react'
import Carousel from '../template/Carousel'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function Bio (props) {

    const { container, id, name, role, known=[ ], bio=[ ] } = props

    useEffect (() => {
        let known = {
            fixedWidth  : '6rem',
            gap         : '.5rem',
            pagination  : false,
            focus       : 'end',
            arrows      : false,
        }
        
        new Splide ('.splide-11', known).mount();
        new Splide ('.splide-12', known).mount();
        new Splide ('.splide-13', known).mount();
        new Splide ('.splide-14', known).mount();
        new Splide ('.splide-15', known).mount();
        new Splide ('.splide-16', known).mount();
        new Splide ('.splide-17', known).mount();
        new Splide ('.splide-18', known).mount();
        new Splide ('.splide-19', known).mount();
    }, [])

    return (
        <section className="bio__modal modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <article className="bio__wrapper modal-content">
                        
                    <header className="bio__header">
                        <h2 className="bio__title bio--title">{name}</h2>
                        <p className="bio__bio bio--bio">{role}</p>
                        <button type="button" className="bio__close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-x"></i>
                        </button>
                    </header>
                        
                    <section className="bio__body">
                        <h3 className="bio__title">Biografía</h3>
                        {bio.map ((bio) => (
                            <p className="bio__bio">{bio}</p>
                        ))}
                    </section>
                        
                    <footer className="bio__footer">
                        <h4 className="bio__title">Conocido por</h4>
                        <Carousel nav={true} container={container}>
                            {known.map ((movie) => (
                                <li className="splide__slide" key={movie}>
                                    <img src={movie.poster} alt={movie.title} className="bio__poster" />
                                </li>
                            ))}
                        </Carousel>
                    </footer>
                </article>
            </div>
        </section>
    )
}
