import Head from 'next/head'

export default function Home() {
  return (
  <>
    <Head>
      <title>kgserrano</title>
    </Head>
    <div className='max-w-xs flex mx-auto p-6 pb-2'>
      <h1 className='text-5xl font-thin'>kgs</h1>
    </div>
    <div className='max-w-xs flex mx-auto px-6 py-2 whitespace-pre-line overflow-x-auto'>
      <p>
        {`My name is Kevin.
        I like graphs.
        I like psychology.`}
      </p>
    </div>
    <div className='max-w-xs flex mx-auto flex-row'>
      <div className='text-center bg-gray-200 ml-6 px-4 py-2 m-2 rounded-md'>About</div>
      <div className='text-center bg-gray-200 px-4 py-2 m-2 rounded-md'>Projects</div>
      <div className='text-center bg-gray-200 px-4 py-2 m-2 rounded-md'>Blog</div>
    </div>
  </>
  )
}
