import React, { useEffect } from 'react'
import streaming from '../resource/json/streaming.json'
import logotype from '../resource/image/layout/casavision.png'
import Carousel from '../template/Carousel'
import Poster from '../components/Poster'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function CasaVision ({position}) {

    useEffect (() => {
        new Splide ('.splide-09', {
            fixedWidth : '9.5em',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
        }).mount();
    }, [])

    return (
        <aside className={`casavision ${position}`}>
            {/* <img src="" alt="" className="casavision__cover" /> */}

            <header className="casavision__header">
                <img src={logotype} alt="Casavisión es la única compañía 100% Nicaragüense de telecomunicaciones y se enfoca en brindar los mejores servicios de televisión por cable e internet junto con un servicio al cliente excepcional." className="casavision__logotype" />
                
                <article className="casavision__heading">
                    <h2 className="casavision__title">llegamos a halloween</h2>
                    <p className="casavision__caption">Deja que el espítitu de la temporada te embruje</p>
                    <p className="casavision__caption casavision--caption">Si esta colección no te mata del susto, te matará del insomnio</p>
                    <p>
                        <a href="https://casavision.com/" target="blank" className="casavision__link">contactanos ya</a>
                    </p>
                </article>
            </header>

            <footer className="casavision__footer">
                <Carousel section={true} container={'splide-09'}>
                    {streaming.casavision.map ((movie) => (
                        <li className="splide__slide" key={movie.title}>
                            <Poster icon={'bi bi-tv'} { ...movie } />
                        </li>
                    ))}
                </Carousel>
            </footer>
        </aside>
    )
}
