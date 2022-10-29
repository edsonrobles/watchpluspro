import React from 'react'
import Footer from '../include/Footer'
import Proposal from '../include/Proposal'
import Layout from '../template/Layout'

export default function Recommendation() {
    return (
        <Layout>
            <Proposal position={'order-2'} />
            <Footer position={'order-3'} />
        </Layout>
    )
}

