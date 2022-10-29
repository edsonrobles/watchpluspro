import React from 'react'

export default function Headline ({title, caption}) {
    return (
        <nav className="headline">
            <li>
                <h2 className="headline__title">
                    {title}
                    <span className="block headline--title">{caption}</span>
                </h2>
            </li>
            
            <li>
                <i className="headline__title bi bi-chevron-down"></i>
            </li>
        </nav>
    )
}
