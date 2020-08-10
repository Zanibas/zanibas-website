import Head from 'next/head'
import Link from 'next/Link'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta 
                    name='description'
                    content='Personal website for kgserrano'
                />
            </Head>
            <header>
                <div className='max-w-md flex mx-auto p-6 pb-2'>
                    <h1 className='text-5xl font-thin'><Link href='/'><a>kgs</a></Link></h1>
                </div>
            </header>
            <main className='max-w-md flex flex-col mx-auto p-6 pt-0'>
                <div className='flex flex-row mt-0'>
                    <div className='text-center bg-gray-200 px-3 py-1 m-2 ml-0 rounded-md'><Link href='/about'><a>About</a></Link></div>
                    <div className='text-center bg-gray-200 px-3 py-1 m-2 rounded-md'><Link href='/projects'><a>Projects</a></Link></div>
                    <div className='text-center bg-gray-200 px-3 py-1 m-2 rounded-md'><Link href='/blog'><a>Blog</a></Link></div>
                </div>    
                {children}
            </main>
        </div>
    )
}