import React, { useEffect } from 'react'
import people from '../resource/json/peoples.json'
import Headline from '../components/Headline'
import Carousel from '../template/Carousel'
import Bio from '../components/Bio'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';

export default function Biography () {

    useEffect (() => {
        new Splide ('.splide-10', {
            fixedWidth  : '8.5rem',
            fixedHeight : '12.5rem',
            gap         : '.5rem',
            pagination  : false,
            focus       : 'end',
            arrows      : false,
        }).mount();
    }, [])

    return (
        <header className="watch__section order-4">
            <Headline
                title={'actores del momento'}
                caption={'protagonizadas y dirgidas por'}
            />

            <Carousel section={true} container={'splide-10'}>
                {people.actors.map ((actor) => (
                    <li className="splide__slide" key={actor.title}>
                        <button type="button" className="bio" data-bs-toggle="modal" data-bs-target={`#${actor.id}`}>
                            <img src={actor.avatar} alt={actor.title} className="bio__avatar" />
                            <h2 className="bio__actor">
                                {actor.name}
                                <span className="bio--actor">{actor.character}</span>
                            </h2>
                        </button>
                    </li>
                ))}
            </Carousel>

            <aside className="watch__section">
                {people.actors.map ((actor) => (
                    <Bio { ...actor } />
                ))}
            </aside>
        </header>
    )
}
