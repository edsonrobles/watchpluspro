import React from 'react'

export default function TabContent (props) {

    const { title, caption, buttonFirst, buttonSecond, tabFirst, tabSecond, navFirst, navSecond, children, position } = props

    return (
        <main className={`watch__section ${position}`}>
            <nav className="headline">
                <li>
                    <h2 className="headline__title">
                        {title}
                        <span className="block headline--title">{caption}</span>
                    </h2>
                </li>
                
                <li>
                    <menu className="headline__menu" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="headline__tab active" id={`${buttonFirst}-tab`} data-bs-toggle="tab" data-bs-target={`#${buttonFirst}-tab-pane`} type="button" role="tab" aria-controls={`${buttonFirst}-tab-pane`} aria-selected="true">
                                {tabFirst}
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="headline__tab" id={`${buttonSecond}-tab`} data-bs-toggle="tab" data-bs-target={`#${buttonSecond}-tab-pane`} type="button" role="tab" aria-controls={`${buttonSecond}-tab-pane`} aria-selected="false">
                                {tabSecond}
                            </button>
                        </li>
                    </menu>
                </li>
            </nav>
            
            <section className="tab-content" id="myTabContent">
                <article className="tab-pane fade show active" id={`${buttonFirst}-tab-pane`} role="tabpanel" aria-labelledby={`${buttonFirst}-tab`} tabIndex="0">
                    {navFirst}
                </article>
                
                <article className="tab-pane fade" id={`${buttonSecond}-tab-pane`} role="tabpanel" aria-labelledby={`${buttonSecond}-tab`} tabIndex="0">
                    {navSecond}
                </article>
            </section>

            {children}
        </main>
    )
}
