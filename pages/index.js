import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, I'm Kevin.
        </h1>

        <p className={styles.description}>
          Here are some links!
        </p>
        <div><span>About</span> <span>Projects</span><span>Blog</span></div>
      </main>

      <footer className={styles.footer}>
          kgserrano
      </footer>
    </div>
  )
}
