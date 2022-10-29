import React from 'react'
import Layout from '../template/Layout'
import Biography from '../include/Biography'
import Trending from '../include/Trending'
import CasaVision from '../modules/CasaVision'
import Cinemas from '../modules/Cinemas'
import Agency from '../modules/Agency'
import Footer from '../include/Footer'


export default function Trend() {
    return (
        <Layout>
            <Biography position={'order-3'} />
            <Trending position={'order-2'} />

            <CasaVision position={'order-4'} />
            <Cinemas position={'order-1'} />
            <Agency position={'order-5'} />

            <Footer position={'order-6'} />
        </Layout>
    )
}

