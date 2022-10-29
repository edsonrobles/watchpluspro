import React from 'react'

export default function Carousel ({article, section, nav, aside, header, footer, container, children}) {
    if (article) {
        return (
            <article className={`splide ${container}`}>
                <nav className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </nav>
            </article>
        )
    } else if (section) {
        return (
            <section className={`splide ${container}`}>
                <nav className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </nav>
            </section>
        )
    } else if (nav) {
        return (
            <nav className={`splide ${container}`}>
                <div className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </div>
            </nav>
        )
    } else if (aside) {
        return (
            <aside className={`splide ${container}`}>
                <nav className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </nav>
            </aside>
        )
    } else if (header) {
        return (
            <header className={`splide ${container}`}>
                <nav className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </nav>
            </header>
        )
    } else if (footer) {
        return (
            <footer className={`splide ${container}`}>
                <nav className={`splide__track ${container}__track`}>
                    <ul className={`splide__list ${container}__list`}>
                        <>{children}</>
                    </ul>
                </nav>
            </footer>
        )
    }
}
