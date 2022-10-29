export default function Poster (props) {

    const { container,cinemas, premiere, title, flag, poster, score, icon, showtimes=[] } = props

    return (
        <figure className={`poster ${container}`}>
            <img src={poster} alt={title} className="poster__movie" />
                
            {
                cinemas ?
                <figcaption className="poster__wrapper">
                    <header className="poster__header">
                        { premiere ? <p className="poster__content">{flag}</p> : <p></p> }
                        <p className="poster__content poster--content">
                            <i className="bi bi-star text-color mr-1"></i>
                            {score}
                        </p>
                    </header>
                    
                    <footer className="poster__footer">
                        <ul className="poster__showtimes">
                            {showtimes.map ((movie) => (
                                <li className="poster__item" key={movie}>{movie}</li>
                            ))}
                        </ul>
                    </footer>
                </figcaption>
                :
                <figcaption className="poster__wrapper poster--wrapper">
                    <p className="poster__content poster--content">
                        <i className={`${icon} text-color mr-1`}></i>
                        {score}
                    </p>
                </figcaption>
            }
        </figure>
    )
}
