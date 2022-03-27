import styles from '/styles/Home.module.css'
import { Footer } from '/components/organisms/Footer/Footer.js'
import { Main } from '/components/organisms/Main/Main.js'
import { HeadMeta } from '/components/atoms/Head/Head.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadMeta title="Top" description="トップページだよ" />
      <Main page="index" />
      <a href="/about">Go to About Page!</a>
      <Footer />
    </div>
  )
}
