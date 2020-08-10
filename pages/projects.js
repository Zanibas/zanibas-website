import Head from 'next/head'
import Layout from '../components/layout'

const OBSERVABLE_LA_URL = 'https://observablehq.com/@zanibas/top-5-crimes-per-neighborhood-per-year-in-los-angeles-2017-20'
const AC_URL = 'https://github.com/Zanibas/DoubutsuDoumoney'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>kgserrano/projects</title>
            </Head>
            <div className='whitespace-pre-line overflow-x-auto'>
                <p><a href={OBSERVABLE_LA_URL}>Observable/d3.js project on LA Crime Data (ongoing)</a></p>
                <p className='mt-4'><a href={AC_URL}>Twitter API + Discord Bot integration: Twitter webhook posts realtime tweets from a specific account into a Discord channel.</a></p>
            </div>
        </Layout>
    )
}