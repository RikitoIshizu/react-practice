import Head from 'next/head'
import styles from '/styles/Home.module.css'
import { Footer } from '/components/organisms/Footer/Footer.js'
import { Links } from '/components/organisms/Links/Links.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Index Page!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Links />
      </main>
      <Footer />
    </div>
  )
}