import React from 'react'
import trailer from '../resource/videos/mujer-rey.mp4'

export default function Cinemas() {
    return (
        <aside className="cinemas order-1">
            <article className="cinemas__trailer">
                <video  className="w-full h-full object-cover" autoPlay loop muted>
                    <source src={trailer} type="video/mp4"/>
                </video>
            </article>

            <figure className="cinemas__advertising">
                <img src="" alt="" className="cinemas__advert" />
                <figcaption className="cinemas__content">
                    <header></header>
                    <footer></footer>
                </figcaption>
            </figure>
        </aside>
    )
}
