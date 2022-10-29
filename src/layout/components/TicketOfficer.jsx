import React from 'react'

export default function TicketOfficer (props) {

    const { children, number, score, title, weeks, gain, budget, poster, actors=[ ] } = props

    return (
        <article className="boxofficer">
            <figure className="boxofficer__card">
                <img src={poster} alt={title} className="boxofficer__poster" />

                <figcaption className="boxofficer__datasheet">
                    <header className="boxofficer__header">
                        <p className="boxofficer__number">{number}</p>
                        <p className="boxofficer__score">
                            <i className="bi bi-star text-color mr-1"></i>
                            {score}
                        </p>
                    </header>
                    <footer className="boxofficer__footer">
                        <h2 className="boxofficer__content">
                            {title}
                            <span className="block boxofficer--content">{weeks}</span>
                        </h2>
                        <h3 className="boxofficer__content text-right">
                            {gain}
                            <span className="block boxofficer--content">PPTO: {budget}</span>
                        </h3>
                    </footer>
                </figcaption>
            </figure>

            <aside className="boxofficer__crews">
                <ul className="boxofficer__characters">
                    {actors.map ((actor) => (
                        <li className="boxofficer__actor" key={actor.name} title={actor.name}>
                            <a href={actor.route} target="blank" className="absolute w-full h-full z-10">{children}</a>
                            <img src={actor.avatar} alt={actor.name} className="w-full h-full object-cover"/>
                        </li>
                    ))}
                </ul>
            </aside>
        </article>
    )
}