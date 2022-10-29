import React, { useEffect } from 'react'
import props from '../resource/json/props.json'
import Carousel from '../template/Carousel'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css';


export default function SigloNuevo ({position}) {

    useEffect (() => {
        new Splide ('.splide-05', {
            fixedWidth : '18.75rem',
            gap        : '.5rem',
            pagination : false,
            focus      : 'end',
            arrows     : false,
            breakpoints : {
                480 : { perPage : '80%' }
            }
        }).mount();
    }, [])

    return (
        <section className={`watch__section siglonuevo ${position}`}>
            <address className="siglonuevo__address">
                <ul className="siglonuevo__contact">
                    <li className="siglonuevo__content">Cine nuevo siglo
                        <span className="siglonuevo--content ml-1"> •  Multicentro Las Brisas</span>
                    </li>
                    <li>
                        <menu className="siglonuevo__networks">
                            {props.siglonuevo.networks.map ((social) => (
                                <li className="siglonuevo__content" key={social.social}>
                                    <a href={social.route} target="blank"><i className={social.icon}></i></a>
                                </li>
                            ))}
                        </menu>
                    </li>
                </ul>
            </address>

            <Carousel aside={true} container={'splide-05'}>
                {props.siglonuevo.promotions.map ((promo) => (
                    <li className="splide__slide" key={promo.title}>
                        <img src={promo.advert} alt={promo.title} className="siglonuevo__promotion" />
                    </li>
                ))}
            </Carousel>
        </section>
    )
}
