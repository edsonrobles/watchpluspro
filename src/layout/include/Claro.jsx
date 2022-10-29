import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import movies from '../resource/json/streaming.json'
import logotype from '../resource/image/svg/layout/clarovideo.svg'
import imagotype from '../resource/image/svg/layout/claro-imagotype.svg'
import Carousel from '../template/Carousel'
import Poster from '../components/Poster'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function Claro () {

    useEffect (() => {
        new Splide ('.splide-04', {
            fixedWidth : '8.125rem',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
        }).mount();
    }, [])

    return (
        <article className="claro watch__last-section order-6">
            <section className="claro__card">
                <img src={imagotype} alt="" className="claro__imagotype" />
                <header className="claro__section">
                    <article className="claro__heading">
                        <h2 className="claro__content">Claro que si... tengo que ver esta noche</h2>
                        <img src={logotype} alt="" className="claro__logotype" />
                    </article>

                    <Carousel aside={true} container={'splide-04'}>
                        {movies.clarovideo.map ((movie) => (
                            <li className="splide__slide poster" key={movie.title}>
                                <Poster {...movie} />
                            </li>
                        ))}
                    </Carousel>
                </header>
                
                <footer className="claro__section claro--section">
                    <p className="claro__content w-full flex justify-between items-center">
                        <Link to="/clarovideo" className="claro__route"></Link>
                        <span>Mira más de
                        <span className="text-red-500 mx-1">Clarovideo</span>
                        en Watch +</span>
                        <i className="text-red-500 bi bi-arrow-right"></i>
                    </p>
                </footer>
            </section>
            
            <aside className="claro__advert"></aside>
        </article>
    )
}
