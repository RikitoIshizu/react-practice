import styles from '/styles/Home.module.css'
import { Links } from '/components/organisms/Links/Links.js'
import { Headline } from '/components/organisms/Headline/Headline.js'

export function Main(props) {
	return (
		<main className={styles.main}>
			<Headline
				page={props.page}
			>
				<code className={styles.code}>page/{props.page}.js</code>
			</Headline>
			<Links />
		</main>
	)
}