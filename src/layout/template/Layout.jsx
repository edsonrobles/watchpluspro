import React from 'react'
import Navbar from '../include/Navbar'


export default function Layout ({children}) {
    return (
        <>
            <Navbar />
            <div className="watch__content">
                {children}
            </div>
        </>
    )
}
