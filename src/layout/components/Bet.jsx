import React from 'react'

export default function Bet (props) {

    const { id, poster, title, gender, score, datasheet } = props

    return (
        <figure className="bet">
            <img src={poster} alt={title} className="bet__poster" />
            <button type="button" className="bet__button" data-bs-toggle="modal" data-bs-target={`#${id}`}></button>
            
            <figcaption className="bet__content">
                <header className="bet__header">
                    <h2 className="bet__title">
                        {title}
                        <span className="bet--title">{gender}</span>
                    </h2>
                    <p className="bet__score">
                        <i className="bi bi-heart-fill text-red-500 mr-1"></i>
                        {score}
                    </p>
                </header>
                
                <footer className="bet__footer">
                    <p className="bet__datasheet">{datasheet}</p>
                </footer>
            </figcaption>
        </figure>
    )
}
