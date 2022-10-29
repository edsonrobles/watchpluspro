import React, { useEffect } from 'react'
import popular from '../resource/json/popular.json'
import TabContent from '../components/TabContent'
import Carousel from '../template/Carousel'
import Poster from '../components/Poster'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';
import DataSheet from '../components/DataSheet'

export default function Trending ({position}) {

    useEffect (() => {
        let carousel = {
            fixedWidth : '13rem',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
        }

        new Splide ('.splide-03', carousel).mount();
        new Splide ('.splide-04', carousel).mount();
    }, [])

    return (
        <TabContent
            position={position}
            title={'populares del momento'}
            caption={'lo mas visto esta semana'}
            buttonFirst={'peliculas'}
            buttonSecond={'series'}
            tabFirst={'películas'}
            tabSecond={'series'}
            navFirst={
                <Carousel nav={true} container={'splide-03'}>
                    {popular.movies.map((movie) => (
                        <li className="splide__slide" key={movie.title}>
                            <button type="button" className="w-full h-full" data-bs-toggle="modal" data-bs-target={`#${movie.id}`}>
                                <Poster icon={'bi bi-star'} { ...movie }/>
                            </button>
                        </li>
                    ))}
                </Carousel>
            }
            navSecond={
                <Carousel nav={true} container={'splide-04'}>
                    {popular.series.map((movie) => (
                        <li className="splide__slide" key={movie.title}>
                            <button type="button" className="w-full h-full" data-bs-toggle="modal" data-bs-target={`#${movie.id}`}>
                                <Poster icon={'bi bi-star'} { ...movie } />
                            </button>
                        </li>
                    ))}
                </Carousel>
            }
        >
            <aside>
                {popular.movies.map((movie) => (
                    <DataSheet key={movie.title} { ...movie } />
                ))}
            </aside>
            
            <aside>
                {popular.series.map((movie) => (
                    <DataSheet key={movie.title} { ...movie } />
                ))}
            </aside>
        </TabContent>
    )
}
