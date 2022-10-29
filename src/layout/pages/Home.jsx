import React from 'react'
import Layout from '../template/Layout'
import BoxOfficer from '../include/BoxOfficer'
import Billboard from '../include/Billboard'
import SigloNuevo from '../include/SigloNuevo'
import News from '../include/News'
import Agency from '../modules/Agency'
import Optical from '../modules/Optical'
import Footer from '../include/Footer'
import ClaroVideo from '../include/ClaroVideo'

export default function Home() {
    return (
        <Layout>
            <BoxOfficer position={'order-5'} />
            <Billboard position={'order-2'} />
            <SigloNuevo position={'order-4'} />
            <News position={'order-7'} />

            <ClaroVideo position={'order-6'} />
            <Agency position={'order-1'} />
            <Optical position={'order-3'} />

            <Footer position={'order-8'} />
        </Layout>
    )
}
