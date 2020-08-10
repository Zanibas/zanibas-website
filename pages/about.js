import Head from 'next/head'
import Layout from '../components/layout'

const RESUMEURL = 'https://docs.google.com/document/d/1XuB9kPfQ-p_EuAOBYT_H9JpLSwnJ6qv9WPinEr9L7RY/edit?usp=sharing'
const GITHUBURL = 'https://github.com/Zanibas'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>kgserrano/about</title>
            </Head>
            <div className='whitespace-pre-line overflow-x-auto'>
                <p>
                    {`Kevin.
                    Graphs.
                    Psychology.
                    Five years blockchain.
                    UC Berkeley: graduated.
                    `}
                </p>
            </div>
            <div className='mt-3'>
                Resume: <a href={RESUMEURL} className='url'>here</a>
            </div>
            <div className='mt-3'>
                GitHub: <a href={GITHUBURL} className='url'>@Zanibas</a>
            </div>
        </Layout>
    )
}