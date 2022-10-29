import React from 'react'
import Poster from '../components/Poster'

export default function DataSheet (props) {

    const { id, title, poster, scene, name, datasheet, score, sinopsys, trailer, genders=[ ] } = props;

    return (
        <article className="datasheet modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <section className="modal-lg modal-dialog modal-dialog-centered">
                <div className="datasheet__wrapper modal-content">
                    <header className="datasheet__header">
                        <Poster icon={'bi bi-star'} poster={poster} score={score} container={'datasheet__poster'} />

                        <aside className="datasheet__cover">
                            <img src={scene} alt={title} className="datasheet__scene" />
                        </aside>
                        <button type="button" className="datasheet__close" data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-x"></i>
                        </button>
                    </header>
                    
                    <footer className="datasheet__footer">
                        <header className="datasheet__heading">
                            <h2 className="datasheet__content">
                                {title}
                                <span className="block mb-2 text-caption datasheet--content">{name}</span>
                            </h2>
                            <p className="datasheet__content mb-2">{datasheet}</p>
                            <ul className="datasheet__genders">
                                {genders.map ((gender) => (
                                    <li className="datasheet__caption datasheet--caption">{gender}</li>
                                ))}
                            </ul>
                        </header>
                        <section className="datasheet__synopsis">
                            <p className="text-left datasheet__caption">{sinopsys}</p>
                        </section>
                        <footer className="datasheet__routes">
                            <a href={trailer} target="blank" className="datasheet__link">Ver trailer</a>
                            <button type="button" className="datasheet__link datasheet--link" data-bs-dismiss="modal" aria-label="Close">
                                Cerrar
                            </button>
                        </footer>
                    </footer>
                </div>
            </section>
        </article>
    )
}
