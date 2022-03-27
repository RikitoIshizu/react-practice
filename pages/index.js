import styles from '/styles/Home.module.css'
import { Footer } from '/components/organisms/Footer/Footer.js'
import { Main } from '/components/organisms/Main/Main.js'
import { HeadMeta } from '/components/atoms/Head/Head.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadMeta title="Top" description="トップページだよ" />
      <Main page="index" />
      <Link href="/about">
        <a>Go to About Page!</a>
      </Link>
      <Footer />
    </div>
  )
}
