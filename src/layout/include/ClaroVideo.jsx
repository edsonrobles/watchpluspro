import React, { useEffect } from 'react'
import streaming from '../resource/json/streaming.json'
import imagotype from '../resource/image/svg/layout/claro-imagotype.svg'
import logotype from '../resource/image/svg/layout/clarovideo.svg'
import Streaming from '../components/Streaming'
import Poster from '../components/Poster'
import Claro from '../modules/Claro'
import Carousel from '../template/Carousel'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function ClaroVideo ({position}) {

    useEffect (() => {
        new Splide ('.splide-08', {
            fixedWidth : '7em',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
        }).mount();
    }, [])

    return (
        <aside className={`streaming ${position}`}>
            <Streaming
                watch={false}
                title={'Claro que si... tengo que ver esta noche'}
                cover={imagotype}
                logotype={logotype}
                streaming={<span className="text-red-500 mx-1">Clarovideo</span>}
            >
                <Carousel section={true} container={'splide-08'}>
                    {streaming.clarovideo.map ((movie) => (
                        <li className="splide__slide" key={movie.title}>
                            <Poster icon={'bi bi-star'} {...movie} />
                        </li>
                    ))}
                </Carousel>
            </Streaming>

            <Claro />
        </aside>
    )
}