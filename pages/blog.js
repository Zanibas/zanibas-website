import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>kgserrano/blog</title>
            </Head>
            <div className='whitespace-pre-line overflow-x-auto'>
                <p className='my-2 text-lg'>Future blog topics:</p>
                <p className='pt-0'>
                    {`- Removing website elements from social media websites.
                    - How naive decentralized systems eventually form hierarchies.
                    - Game design ideas.
                    `}
                </p>
            </div>
        </Layout>
    )
}