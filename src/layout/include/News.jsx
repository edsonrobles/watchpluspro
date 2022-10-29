import React, { useEffect } from 'react'
import news from '../resource/json/news.json'
import Headline from '../components/Headline'
import Carousel from '../template/Carousel'
import Moment from 'react-moment'
import 'moment/locale/es'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';


function Card (props) {

    const { cover, title, route, children, source, moment, categories=[] } = props

    useEffect (() => {
        new Splide ('.splide-07', {
            fixedWidth  : '24rem',
            gap         : '.5rem',
            pagination  : false,
            focus       : 'end',
            arrows      : false,
            breakpoints : {
                480: { fixedWidth: '100%' }
            }
        }).mount();
    }, [])
    
    return (
        <figure className="news">
            <img src={cover} alt={title} className="news__cover" />

            <a href={route} target="blank" className="news__route">{children}</a>
            <figcaption className="news__content">
                <header className="news__header">
                    <h2 className="news__title">
                        {title}
                        <span className="block news--title">{source} • <Moment to={moment} /></span>
                    </h2>
                </header>
                
                <footer className="news__footer">
                    <ul className="news__categories">
                        {categories.map ((category) => (
                            <li className="news__item" key={category}>{category}</li>
                        ))}
                    </ul>
                </footer>
            </figcaption>
        </figure>
    )
}


export default function News ({position}) {
    return (
        <section className={`watch__section ${position}`}>
            <Headline
                title={'principales noticias'}
                caption={'las últimas noticias del cine y la TV'}
            />

            <Carousel aside={true} container={'splide-07'}>
                {news.article.map ((news) => (
                    <li className="splide__slide" key={news.title}>
                        <Card { ...news } />
                    </li>
                ))}
            </Carousel>
        </section>
    )
}
