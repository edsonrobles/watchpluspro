import React, { useEffect } from 'react'
import billboard from '../resource/json/billboard.json'
import TabContent from '../components/TabContent';
import Carousel from '../template/Carousel';
import Poster from '../components/Poster';
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function Billboard ({position}) {

    useEffect (() => {
        let carousel = {
            fixedWidth : '13rem',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
        }

        new Splide ('.splide-01', carousel).mount();
        new Splide ('.splide-02', carousel).mount();
    }, [])

    return (
        <>
            <TabContent
                position={position}
                title={'presentandose en cines'}
                caption={'cartelera del 06 al 12 de Octubre'}
                buttonFirst={'cinemark'}
                buttonSecond={'sigloNuevo'}
                tabFirst={'cinemark'}
                tabSecond={'siglo nuevo'}
                navFirst={
                    <Carousel nav={true} container={'splide-01'}>
                        {billboard.cinemark.map((movie) => (
                            <li className="splide__slide" key={movie.title}>
                                <Poster cinemas={true} { ...movie }/>
                            </li>
                        ))}
                    </Carousel>
                }
                navSecond={
                    <Carousel nav={true} container={'splide-02'}>
                        {billboard.siglonuevo.map((movie) => (
                            <li className="splide__slide" key={movie.title}>
                                <Poster cinemas={true} { ...movie } />
                            </li>
                        ))}
                    </Carousel>
                }
            />
        </>
    )
}
