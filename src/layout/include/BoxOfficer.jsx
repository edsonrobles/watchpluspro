import React, { useEffect } from 'react'
import boxoffice from '../resource/json/boxoffice.json'
import Headline from '../components/Headline'
import TicketOfficer from '../components/TicketOfficer'
import Carousel from '../template/Carousel'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function BoxOfficer ({position}) {

    useEffect (() => {
        new Splide ('.splide-06', {
            fixedWidth  : '31.25rem',
            gap         : '.5rem',
            pagination  : false,
            focus       : 'end',
            arrows      : false,
            breakpoints : {
                480 : { fixedWidth  : '100%', }
            }
        }).mount();
    }, [])

    return (
        <header className={`watch__section ${position}`}>
            <Headline
                title={'películas más taquilleras'}
                caption={'fin de semana del 14 al 16 de Octubre'}
            />
            
            <Carousel nav={true} container={'splide-06'}>
                {boxoffice.movies.map((movie) => (
                    <li className="splide__slide">
                        <TicketOfficer carousel={true}  { ...movie } />
                    </li>
                ))}
            </Carousel>
        </header>
    )
}
