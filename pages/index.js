import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
  <Layout>
    <Head>
      <title>kgserrano</title>
    </Head>
    <div className='whitespace-pre-line overflow-x-auto'>
      <p>
        {`Kevin.
        Graphs.
        Psychology.`}
      </p>
    </div>
  </Layout>
  )
}
